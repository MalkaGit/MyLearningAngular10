import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { ParseTemplateOptions } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, name: 'Buddy:-)', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: '' },
    { id: 2, name: 'Luna:-)',  breed: 'Labrador', age: 3, weight: 25, photoUrl: '' }
  ];
  private nextNewIndex: number = 3;

  constructor() {}

  async getAll(): Promise<Pet[]> {
    return [...this.pets]; // automatically resolves the promise. retrun a copy to prevent direct modification
  }
  //sync verion
  // getAll(): Pet[] {
  //   return [...this.pets];
  // }


  async getById(id: number): Promise<Pet> {
    const pet :Pet|undefined = this.pets.find(p => p.id === id);
    if (!pet) {
      throw new Error(`Pet with id ${id} not found`);
    }
    return {...pet }; // automatically resolves the promise. return a copy to prevent direct modification.
  }
  //sync verion
  // getById(id: number): Pet |undefined {
  //   const pet :Pet|undefined = this.pets.find(p => p.id === id);
  //   const result : Pet |undefined  = (pet === undefined) ?undefined :  {...pet };
  //   return result;
  // }

  async add(pet: Pet): Promise<Pet> {
    if (!pet.name) {
      throw new Error('Bad request: name is required'); //resolve to return Promise.reject ...
    }
    const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
    newPet.id = this.nextNewIndex++;
    this.pets.push(newPet);
    return { ...newPet };  //resolve to return Promise.resolve... retrun a copy to prevent direct modification
  }
  //sync verion
  //add(pet: Pet): Pet {
  //   const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
  //   newPet.id = this.nextNewIndex++;
  //   this.pets.push(newPet);
  //   return { ...newPet }; //retrun a copy to prevent direct modification
  // }
  


  async update(pet: Pet): Promise<void> {
    if (!pet.name) {
      throw new Error('Bad request: Pet name is required');
    }
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = {...pet };//save a copy to prevent direct modification
      return; // Automatically resolves the promise as nothing needs to be returned
    } 
    else {
      throw new Error(`Pet with id ${pet.id} not found`);
    }
  }
  //sync verion
  // update(pet: Pet): Boolean {
  //   const index = this.pets.findIndex(p => p.id === pet.id);
  //   if (index !== -1) {
  //     this.pets[index] = {...pet };//save a copy to prevent direct modification
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }    
  // }



  async delete(id: number): Promise<void> {
    const index = this.pets.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pets.splice(index, 1);
      return; // Automatically resolves the promise as nothing needs to be returned
    }
    else 
    {
      throw new Error(`Pet with id ${id} not found`);
    }
  }
  //sync verion
  // delete(id: number): boolean {
  //   const index = this.pets.findIndex(p => p.id === id);
  //   if (index !== -1) {
  //     this.pets.splice(index, 1);
  //     return true; 
  //   }
  //   else{
  //    return false;
  //   }
  // }

}


//Note

//key features

//new to promise 
//1.  update and delete retrun void if item found. Otherwise, eception

//as in array
//0.    ensure immutability by retruning copies when needed
//    ithout it, as array updated here it is updated in the component

//1. @Injectable,import { Injectable }
//   This marks the class as one that participates in the dependency injection system.
//   The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
//import { Injectable } from '@angular/core';

//. add: Assigns a unique, auto-incrementing id to each item.
//3.getItemById(id: number): Retrieves a specific item by its id.

