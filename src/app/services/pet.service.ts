import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { Observable, of, throwError } from 'rxjs';
import { ParseTemplateOptions } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, name: 'Buddy ))', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: '' },
    { id: 2, name: 'Luna ))',  breed: 'Labrador', age: 3, weight: 25, photoUrl: '' }
  ];
  private nextNewIndex: number = 3;

  constructor() {}

  getAll(): Observable<Pet[]> {
    return of([...this.pets]); //of and throwError return observable. retrun a copy to prevent direct modification.
  }
  //async verion
  // async getAll(): Promise<Pet[]> {
  //   return [...this.pets]; // automatically resolves the promise. retrun a copy to prevent direct modification
  // }

  //sync verion
  // getAll(): Pet[] {
  //   return [...this.pets];
  // }





  getById(id: number): Observable<Pet> {
    const pet :Pet|undefined = this.pets.find(p => p.id === id);
    return pet ? of({ ...pet }) : throwError(() => new Error(`Pet with id ${id} not found`));
    //of and throwError return observable. retrun a copy to prevent direct modification.
  }

  //async verion
  // async getById(id: number): Promise<Pet> {
  //   const pet :Pet|undefined = this.pets.find(p => p.id === id);
  //   if (!pet) {
  //     throw new Error(`Pet with id ${id} not found`);
  //   }
  //   return {...pet }; // automatically resolves the promise. return a copy to prevent direct modification.
  // }

  //sync verion
  // getById(id: number): Pet |undefined {
  //   const pet :Pet|undefined = this.pets.find(p => p.id === id);
  //   const result : Pet |undefined  = (pet === undefined) ?undefined :  {...pet };
  //   return result;
  // }




  add(pet: Pet): Observable<Pet> {
    if (!pet.name) {
      return throwError(() => new Error('Bad request: name is required'));
    }
    const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
    newPet.id = this.nextNewIndex++;
    this.pets.push(newPet);
    return of({ ...newPet });
    //of and throwError return observable. retrun a copy to prevent direct modification.
  }

  //async verion
  // async add(pet: Pet): Promise<Pet> {
  //   if (!pet.name) {
  //     throw new Error('Bad request: name is required'); //resolve to return Promise.reject ...
  //   }
  //   const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
  //   newPet.id = this.nextNewIndex++;
  //   this.pets.push(newPet);
  //   return { ...newPet };  //resolve to return Promise.resolve... retrun a copy to prevent direct modification
  // }

  //sync verion
  //add(pet: Pet): Pet {
  //   const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
  //   newPet.id = this.nextNewIndex++;
  //   this.pets.push(newPet);
  //   return { ...newPet }; //retrun a copy to prevent direct modification
  // }
  




  update(pet: Pet): Observable<void> {
    if (!pet.name) {
      return throwError(() => new Error('Bad request: Pet name is required'));
    }
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = { ...pet }; //save a copy to prevent direct modification
      return of(void 0);
    }
    return throwError(() => new Error(`Pet with id ${pet.id} not found`));
    //of and throwError return observable. retrun a copy to prevent direct modification.
  }

  //async verion
  // async update(pet: Pet): Promise<void> {
  //   if (!pet.name) {
  //     throw new Error('Bad request: Pet name is required');
  //   }
  //   const index = this.pets.findIndex(p => p.id === pet.id);
  //   if (index !== -1) {
  //     this.pets[index] = {...pet };//save a copy to prevent direct modification
  //     return; // Automatically resolves the promise as nothing needs to be returned
  //   } 
  //   else {
  //     throw new Error(`Pet with id ${pet.id} not found`);
  //   }
  // }

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




  delete(id: number): Observable<void> {
    const index = this.pets.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pets.splice(index, 1);
      return of(void 0);
    }
    return throwError(() => new Error(`Pet with id ${id} not found`));
  }

  //async version 
  // async delete(id: number): Promise<void> {
  //   const index = this.pets.findIndex(p => p.id === id);
  //   if (index !== -1) {
  //     this.pets.splice(index, 1);
  //     return; // Automatically resolves the promise as nothing needs to be returned
  //   }
  //   else 
  //   {
  //     throw new Error(`Pet with id ${id} not found`);
  //   }
  // }


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

//new obserbable verion
//0.
// In this version, each service method now returns an observable, 
// making the service reactive and more suitable for use in Angular with RxJS.
//  The logic behind immutability is maintained by returning copies of the objects, 
//  ensuring that the original data cannot be modified directly
//0. add
//    import { Observable, of, throwError } from 'rxjs';
//0. in async await 
//    method have async ? in async await  - yes. in obervable - no
//    on success         ? in async await  - return object. 
//                         in obervable retrun promise  ith of.
//    on error             ? in async await  - throw new Error 
//                           in obervable retrun throwError

//1. method signature does not return promise but obserbable
//   of return observable.  
//   throwError retrun observable instead throw new Error 
//3. Key Changes:
// getAll: Now returns an Observable<Pet[]> using of instead of returning a Promise.
// getById: Returns an Observable<Pet> using of if found, and throwError if not found.
// add: Returns an Observable<Pet> using of after adding a new pet.
// update: Returns Observable<void> to indicate success or failure.
// delete: Returns Observable<void> to indicate success or failure



//0.as in array and async
//.    ensure immutability by retruning copies when needed
//    ithout it, as array updated here it is updated in the component
//1. @Injectable,import { Injectable }
//   This marks the class as one that participates in the dependency injection system.
//   The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
//import { Injectable } from '@angular/core';

//. add: Assigns a unique, auto-incrementing id to each item.
//3.getItemById(id: number): Retrieves a specific item by its id.

