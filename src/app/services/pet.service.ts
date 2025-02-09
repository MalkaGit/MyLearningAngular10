import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { ParseTemplateOptions } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, name: 'Buddy!!!', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: '' },
    { id: 2, name: 'Luna!!!',  breed: 'Labrador', age: 3, weight: 25, photoUrl: '' }
  ];
  private nextNewIndex: number = 3;

  constructor() {}

  getAll(): Pet[] {
    return [...this.pets];//retrun a copy to prevent direct modification
  }

  getById(id: number): Pet |undefined {
    const pet :Pet|undefined = this.pets.find(p => p.id === id);
    const result : Pet |undefined  = (pet === undefined) ?undefined :  {...pet };//return a copy to prevent direct modification
    return result;
  }

  add(pet: Pet): Pet {
    const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
    newPet.id = this.nextNewIndex++;
    this.pets.push(newPet);
    return { ...newPet }; //retrun a copy to prevent direct modification
  }

  update(pet: Pet): Boolean {
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = {...pet };//save a copy to prevent direct modification
      return true;
    }
    else {
      return false;
    }    
  }

  delete(id: number): boolean {
    const index = this.pets.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pets.splice(index, 1);
      return true; 
    }
    else{
     return false;
    }
  }

}


//Note

//key features


//0. ensure immutability by retruning copies when needed
//    ithout it, as array updated here it is updated in the component

//1. @Injectable,import { Injectable }
//   This marks the class as one that participates in the dependency injection system.
//   The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
//import { Injectable } from '@angular/core';


//. add: Assigns a unique, auto-incrementing id to each item.

//3.getItemById(id: number): Retrieves a specific item by its id.

//4.updateItem(id: number, newName: string): Updates an item’s name by id.

//5. deleteItem(id: number): Removes an item by id.
