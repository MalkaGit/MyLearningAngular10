import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  pets: Pet[] = [
    { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Luna', breed: 'Labrador', age: 3, weight: 25, photoUrl: 'https://via.placeholder.com/100' }
  ];

  newPet: Pet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
  editIndex: number | null = null;

  // Add or Update a pet
  addPet() {
    if (this.editIndex === null) {
      // Adding new pet
      this.newPet.id = this.pets.length + 1;
      this.pets.push({ ...this.newPet });
    } else {
      // Updating existing pet
      this.pets[this.editIndex] = { ...this.newPet };
      this.editIndex = null;
    }
    this.resetForm();
  }

  // Edit pet (loads data into the form)
  editPet(index: number) {
    this.newPet = { ...this.pets[index] }; // Copy the pet to edit
    this.editIndex = index;
  }

  // Delete pet
  deletePet(index: number) {
    this.pets.splice(index, 1);
    if (this.editIndex === index) {
      this.resetForm();
    }
  }

  // Reset the form
  resetForm() {
    this.newPet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
    this.editIndex = null;
  }
}
