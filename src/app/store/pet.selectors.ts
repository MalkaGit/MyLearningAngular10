//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PetState } from './pet.reducer';
import { Pet } from '../models/pet.model';

// Selector to get the entire pet state
// This is a feature selector that selects the whole PetState. It is used as the base for all other selectors.
export const selectPetState = createFeatureSelector<PetState>('pets');

//This selector retrieves the array of pets from the state.
export const selectPets = createSelector(
  selectPetState,
  (state: PetState) => state.pets
);

//This selector retrieves any error message from the state, which can be displayed in the UI if something goes wrong.
export const selectError = createSelector(
  selectPetState,
  (state: PetState) => state.error
);

//This is a dynamic selector that allows you to retrieve a single pet by its id. It's created using the createSelector function and can be used in cases where you need to access a specific pet from the list.
export const selectPetById = (petId: number) => createSelector(
  selectPets,
  (pets: Pet[]) => pets.find(pet => pet.id === petId)
);
 
/*
Selectors 
  goal: 
      When the reducer updates the state in the store (eg, pets)
      the component and template get updated automatically 

Usage (component code) 


    component define observable data member  and ubscribe to the store in constructor
          public pets$: Observable<Pet[]>;          
          public error$: Observable<string | null>;
          this.pets$ = this.store.pipe(select(PetSelectors.selectPets));       
          this.error$ = this.store.pipe(select(PetSelectors.selectError));    
    temlate 
         <div *ngFor="let pet of pets$ | async" class="pet-card">

    When reducer update (pets in) the  store (ith service result)
         pets$ emits a new value because it is subscribed to the store via the selector.
         When pets$ emits a new value,  the template async pipe  detects the change and updates the template.  

    
Code
      state holds (see reducer)
          pets: Pet[];                          
          error: string | null; 

      Selectors  
          all state:    selectPetState
          pets:         selectPets
          error:        selectError
          pet by id:    selectPetById
*/