//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service'
import * as PetActions from '../../store/pet.actions';
import { PetState } from '../../store/pet.reducer';
import * as PetSelectors from '../../store/pet.selectors';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent  {

  //
  public pets$: Observable<Pet[]>;                                          //with redux:   component define observable  that listens for changes in the Redux store 
  public error$: Observable<string | null>;                                 //with redux:   component define observable  that listens for changes in the Redux store 
  public isUpdating: boolean;                                               //with redux    - tell if from is updating or adding 
  public newOrUpdatedPet: Pet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
  //public pets: Pet[] = [];                                                //without redux - component against service 
  //public errorMessage: string = '';                                       //without redux - component against service 
  //public editIndex: number | null = null;                                 //without redux - tell if from is updating or adding 


  //constructor with redux    (component agaisnt Store actions)
   constructor(private store: Store<PetState>) {         
    this.pets$ = this.store.pipe(select(PetSelectors.selectPets));          //redux select -  observable subscribe to get notification from the store      
    this.error$ = this.store.pipe(select(PetSelectors.selectError));        //redux select -  observable subscribe to get notification from the store
    this.isUpdating = false;
  }
  // constructor without redux (component agaisnt PetService)
   //constructor(private petService: PetService) {}


  //ngOnInit  with redux
   ngOnInit(): void {  
    this.loadPets();                 
   }
   loadPets(): void {
    this.store.dispatch(PetActions.getAllPets());
  }
 
  //redux version - dispatch action 
  addPet(): void {
    if (this.newOrUpdatedPet.name) {
      this.store.dispatch(PetActions.addPet({ pet: { ...this.newOrUpdatedPet, id: 0 } }));
      this.resetForm();                                                                   //clear the form
    }
  }

  //redux version - dispatch action 
  updatePet(): void {
    if (this.newOrUpdatedPet.name) { //{ pet: this.newOrUpdatedPet }
      this.store.dispatch(PetActions.updatePet({ pet: { ...this.newOrUpdatedPet } }));
      this.resetForm();                                                                 //clear the form
    }
  }
  
   //delete  with redux
   deletePet(id: number): void {
    this.store.dispatch(PetActions.deletePet({ id }));
    this.resetForm(); //if deleting editted pet
      
  }


  //selectPet with redux
  editPet(pet: Pet): void {
    this.newOrUpdatedPet = { ...pet };
    this.isUpdating = true;
  }
  //selectPet without redux
  // editPet(index: number) {
  //   this.newOrUpdatedPet = { ...this.pets[index] }; //copy
  //   this.editIndex = index;
  // }
 
 
  // resetForm with redux
  resetForm(): void {
    this.newOrUpdatedPet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
    this.isUpdating = false;
  }
  // resetForm without redux
  // resetForm() {
  //   this.newOrUpdatedPet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
  //   this.editIndex = null;
  // }

}



/*
  flow
    component ngOnInit dispatch getAllPets action
    getAllPets is handled by effect that fire petService. 
    on success,success action is dispatched by effect 
    reducer handle the  success action by updating the store  state
    component data update automatically and so the html template

    Reduc version
      component class does not use service (property, constructor etc)
      instead component class use Store
      
      
   

    General
          di
              When Angular creates the component, the Dependency Injection system sets the parameter
              to constructor (to the singleton instance).

          ngOnInit() 
              is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. 
              It's a good place to put initialization logic.
              calling getPet in the constructor, is not the best practice.
              constructor  should be used for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
             Instead, call getPets() inside the ngOnInit lifecycle hook and let Angular call ngOnInit()
              at an appropriate time after constructing a HeroesComponent instance.


    changes for observable instead aync await
          getPets(): Replaced async/await with the subscribe() method to handle the observable from petService.getAll().
          addPet() and updatePet(): Replaced async/await with subscribe() to handle observable responses for add and update operations.
          deletePet(): Used subscribe() to handle the observable from the delete operation.
          getItemById(): Similar change for getById() where subscribe() is used.
*/


 /* OLDER CODE without redux for get     obsevable, async, sync

  ngOnInit without redux - get data from petService
  ngOnInit() {  
    this.getPets(); //get pet from petService 
  }

  //getPets - obsevable
    getPets(): void { 
      this.petService.getAll().subscribe({
        next: (data: Pet[]) => this.pets = data,  // On success, update the pets list
        error: (error) => this.errorMessage = error.message || 'Something went wrong!'  // Handle errors
      });
  }

  //getPets - async
   async getPets(): Promise<void> {
     try {
       this.pets = await this.petService.getAll();
     } 
     catch (error :any) {
       this.errorMessage = error.message || 'Something went wrong!';
     }
   }

  //getPets - sync
   getPets(): void {
     this.pets = this.petService.getAll();
   }
  */



   /*
   OLDER CODE without redux for add and update     obsevable, async, sync
  //no redux -addPet obsevable
   addPet(): void {
     if (this.editIndex === null) {
       // Add
       this.petService.add(this.newOrUpdatedPet).subscribe({
         next: (addedPet: Pet) => this.pets.push({ ...addedPet }),  // create copy
         error: (error) => this.errorMessage = error.message || 'Failed to add item!'  // Handle errors
       });
     } else {
  //     // Update
       this.petService.update(this.newOrUpdatedPet).subscribe({
         next: () => {
           if (this.editIndex !== null) 
             this.pets[this.editIndex] = { ...this.newOrUpdatedPet }; // copy
           this.editIndex = null;
         },
         error: (error) => this.errorMessage = error.message || 'Failed to update item!'  // Handle errors
       });
     }
     this.resetForm();
   }

  //no redux -addPet async
   async addPet(): Promise<void> {
     if (this.editIndex === null) 
     { //add
       try {
           const addedPet = await this.petService.add(this.newOrUpdatedPet);
           this.pets.push({ ...addedPet }); //create copy
       } 
       catch (error: any){
           this.errorMessage = error.message || 'Failed to add item!';
       }
     } 
     else 
     { //update
       try {
           await this.petService.update(this.newOrUpdatedPet);
           this.pets[this.editIndex] = { ...this.newOrUpdatedPet };//copy !
           this.editIndex = null;
       } 
       catch (error: any){
         this.errorMessage = error.message || 'Failed to update item!';
       }
     }
     this.resetForm();
   }

  //sync
   addPet() {
     if (this.editIndex === null) {
       //add
       const addedPet = this.petService.add(this.newOrUpdatedPet);
       this.pets.push({ ...addedPet }); //create copy
     } else {
       //update
       const updatedPet :Boolean = this.petService.update(this.newOrUpdatedPet);
       if (updatedPet)
         this.pets[this.editIndex] = { ...this.newOrUpdatedPet };//copy !
       this.editIndex = null;
     }
     this.resetForm();
   }
  */
 

   /*
   OLDER CODE without redux for delete    obsevable, async, sync
   //delete against service - ovservalbe 
  // deletePet(index: number = 0): void {
  //   this.petService.delete(this.pets[index].id).subscribe({
  //     next: () => {
  //       this.pets.splice(index, 1);  // Remove pet from list
  //       if (this.editIndex === index) { // Reset form if edited pet is deleted
  //         this.resetForm();
  //       }
  //     },
  //     error: (error) => this.errorMessage = error.message || 'Failed to delete item!'  // Handle errors
  //   });

  //delete against service - async 
  // async deletePet(index: number = 0): Promise<void> {
  //   try 
  //   {  
  //     await this.petService.delete(this.pets[index].id);
  //     this.pets.splice(index, 1);
  //     if (this.editIndex === index) { //in case deleted pet is editted
  //              this.resetForm();
  //     }
  //   } catch (error :any ) 
  //   {
  //     this.errorMessage = error.message || 'Failed to delete item!';
  //   }
  // }

  //deletePet - sync  petService against array
  // deletePet(index: number) {
  //   const deletedPet :Boolean = this.petService.delete(this.pets[index].id);
  //   if (deletedPet) {
  //     this.pets.splice(index, 1);
  //     if (this.editIndex === index) { //in case deleted pet is editted
  //       this.resetForm();
  //     }
  //   }
  // }
   */