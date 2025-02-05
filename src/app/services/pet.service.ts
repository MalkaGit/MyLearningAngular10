import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { ParseTemplateOptions } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[] = [
    { id: 1, name: 'Buddy!', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: '' },
    { id: 2, name: 'Luna!', breed: 'Labrador', age: 3, weight: 25, photoUrl: '' }
  ];
  

  constructor() {}

  getAll(): Pet[] {
    return [...this.pets];//like erialzie - other copy
  }

  getById(id: number): Pet |undefined {
    let pet :Pet|undefined = this.pets.find(p => p.id === id);
    return pet;
  }

  add(pet: Pet): Pet {
    pet.id = this.pets.length + 1;
      this.pets.push(pet);
      return pet;
  }

  update(pet: Pet): Boolean {
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = { ...this.pets[index], ...pet };
      return true;
    }
    else {
      return false;
    }    
  }

  delete(id: number): void {
    const index = this.pets.findIndex(p => p.id === id);
    if (index !== -1) 
    this.pets.splice(index, 1);
  }

}


//Note
//1. @Injectable,import { Injectable }
//   This marks the class as one that participates in the dependency injection system.
//   The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
//import { Injectable } from '@angular/core';
