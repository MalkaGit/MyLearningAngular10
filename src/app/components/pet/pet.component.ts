import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  pets: Pet[] = [];
  newPet: Pet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
  editIndex: number | null = null;


   constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.pets = this.petService.getAll();
  }

  // Add or Update a pet
  addPet() {
    if (this.editIndex === null) {
      let newPetAndId = this.petService.add(this.newPet);
      this.pets.push({ ...newPetAndId }); //create copy
    } else {
      let updated :Boolean = this.petService.update(this.newPet);
      if (updated)
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
    this.petService.delete(this.pets[index].id);
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


//Note:
  //constructor define a private service property
  //di: When Angular creates the component, the Dependency Injection system sets the service parameter to the singleton instance.
  //constructor(private petService: PetService) {}


  
 //Note: calling getPet in the constructor, is not the best practice.
 //      constructor  should be used for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
//       Instead, call getPets() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
//ngOnInit() 


