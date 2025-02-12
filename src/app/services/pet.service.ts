//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ParseTemplateOptions } from '@angular/compiler';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, name: 'Buddy :-))', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: '' },
    { id: 2, name: 'Luna  :-))',  breed: 'Labrador', age: 3, weight: 25, photoUrl: '' }
  ];
  private nextNewIndex: number = 3;

  constructor() {}

  //GET ALL
  //Observable verion 
  //of and throwError return observable. retrun a copy to prevent direct modification.
  //option1: no redux -  component work with service layer that call httpClient (returning observable) or service layer use of to return observable
  //option2: redux    -  component work with action. affect handle the rest action by calling service that return observable
  getAll(): Observable<Pet[]> {
        return of([...this.pets]);   
  }
  /*
  //async verion
  async getAll(): Promise<Pet[]> {
     return [...this.pets]; // automatically resolves the promise. retrun a copy to prevent direct modification
  }

  //sync verion
  getAll(): Pet[] {
     return [...this.pets];
  }
  */


   
  //GET BY ID
  //Observable verion 
  //of and throwError return observable. retrun a copy to prevent direct modification.
  getById(id: number): Observable<Pet> {
    const pet :Pet|undefined = this.pets.find(p => p.id === id);
    return pet ? of({ ...pet }) : throwError(() => new Error(`Pet with id ${id} not found`));
  }
  /*
  //async verion
   async getById(id: number): Promise<Pet> {
     const pet :Pet|undefined = this.pets.find(p => p.id === id);
     if (!pet) {
       throw new Error(`Pet with id ${id} not found`);
     }
     return {...pet }; // automatically resolves the promise. return a copy to prevent direct modification.
   }

  //sync verion
   getById(id: number): Pet |undefined {
     const pet :Pet|undefined = this.pets.find(p => p.id === id);
     const result : Pet |undefined  = (pet === undefined) ?undefined :  {...pet };
     return result;
   }
  */


  //ADD
  //Observable verion 
  //of and throwError return observable. retrun a copy to prevent direct modification.
  add(pet: Pet): Observable<Pet> {
    if (!pet.name) {
      return throwError(() => new Error('Bad request: name is required'));
    }
    const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
    newPet.id = this.nextNewIndex++;
    this.pets.push(newPet);
    return of({ ...newPet });
  }
  /*
  //async verion
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
  add(pet: Pet): Pet {
     const newPet: Pet = { ...pet}; //save a copy to prevent direct modification
     newPet.id = this.nextNewIndex++;
     this.pets.push(newPet);
     return { ...newPet }; //retrun a copy to prevent direct modification
   }
  */


  //UPDATE
  //Observable version (return Pet and not void. This is for redux only. Otherwise, redu get action, but does not have data to update store)
  //  effect get the result and generate sucess action from it (with the pet returned by this method)
  //  redux handle the action and update the store state (take the pet from the action) 
  //of and throwError return observable. retrun a copy to prevent direct modification.
  update(pet: Pet): Observable<Pet> {
    if (!pet.name) {
      return throwError(() => new Error('Bad request: Pet name is required'));
    }
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = { ...pet };                            //save a copy to prevent direct modification
      return of({ ...pet });                                    //if reult is Promise<void>, return  of(void 0);
    }
    return throwError(() => new Error(`Pet with id ${pet.id} not found`));
  }
  /*
  //async verion
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
  */


  //DELETE
  //Observable verion 
  //Observable version (return Pet id and not void. This is for redux only. Otherwise, redu get action, but does not have data to update store)
  //effect get the result and generate sucess action from it (with the pet id returned by this method)
  //redux handle the action and update the store state (take the pet id from the action) 
  //of and throwError return observable. retrun a copy to prevent direct modification.
  delete(id: number): Observable<number> {
    const index = this.pets.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pets.splice(index, 1);
      return of(id);
    }
    return throwError(() => new Error(`Pet with id ${id} not found`));
  }
  /*
  //async version 
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
  */
}


/*
A. 3 verions: sync, async, ovservable (for service returning observable and redux)
    This is ovservable verion.
    all service methods return ovservable using of and throwError that return ovservable.
    about rxjs ovservable https://rxjs-dev.firebaseapp.com/guide/observer

B. for obervable ovservable redux verion
  
   import { Observable, of, throwError } from 'rxjs';

  all service methods return an observable 
    it makes the service reactive and more suitable for use in Angular with RxJS.

  Update method
      on success, this class return the saved pet although it is not returned from RestAPI.
      reason: see code 

  Deletemethod
    on success, this class return the deleted pet id although it is not returned from RestAPI.
    reason: see code 


C. All vesions
  @Injectable,import { Injectable }
      This marks the class as one that participates in the dependency injection system.
      The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
      import { Injectable } from '@angular/core';

  all methodas ensure immutability by retruning copies when needed
      ithout it, as array updated here it is updated in the component
      The logic behind immutability is maintained by returning copies of the objects, 
      ensuring that the original data cannot be modified directly

   add method
      Assigns a unique, auto-incrementing id to each item.

D. async await V Observable
  method have async ? in async await  - yes.              in obervable - no
  on success         ? in async await  - return object.   in obervable retrun promise  ith of.
  on error           ? in async await  - throw new Error  in obervable retrun throwError
*/