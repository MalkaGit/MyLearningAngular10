//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { createReducer, on } from '@ngrx/store';
import { Pet } from '../models/pet.model';
import * as PetActions from './pet.actions';

//define interface (all the field to  store)
export interface PetState {
  pets: Pet[];                          
  error: string | null;                 
}

//define initialState
export const initialState: PetState = {
  pets: [],
  error: null,
};

export const petReducer = createReducer(
  initialState,

  on(PetActions.getAllPetsSuccess, (state, { pets }) => ({   
                                    //build new state on getAllPetsSuccess action (service read completed)
    ...state,                       //prev state (overriden by spread oeprator)
    pets,                           //new state pets come from the action (service result)            
    error: null,                    //new state error is cleared  
  })),

  on(PetActions.addPetSuccess, (state, { pet }) => ({        
                                    //build new state on addPetSuccess action (service add completed)
    ...state,                       //prev state (overriden by spread oeprator)
    pets: [...state.pets, pet],     //new state pets contain the original plus the new one from the action (service result)   
    error: null,                    //new state error is cleared  
  })),

  on(PetActions.updatePetSuccess, (state, { pet }) => ({     
                                    //build new state on updatePetSuccess action (service update completed)
    ...state,                       //prev state (overriden by spread oeprator)
    pets: state.pets.map((p) => (p.id === pet.id ? pet : p)),  //new state pets contain the original plus replacing the one updated (from the action (service result))    
    error: null,                    //new state error is cleared  
  })),  

   on(PetActions.deletePetSuccess, (state, { id }) => ({      
                                    //build new state on deletePetSuccess action (service delete completed)
    ...state,                       //prev state (overriden by spread oeprator)
    pets: state.pets.filter((pet) => pet.id !== id), // //new state pets contain the original removing the deleted one (from the action (service result))    
    error: null,                    //new state error is cleared  
  })),

  //handle all failure
  on(PetActions.getAllPetsFailure, PetActions.addPetFailure, PetActions.updatePetFailure, PetActions.deletePetFailure, (state, { error }) => ({
    ...state,                       //prev state (overriden by spread oeprator)
    error,                          //override state error, pets data is not updated
  }))
);

/*  Goal:
         for each success\error action reducer  update store
    Flow:
         hen service return observeable to effect, the effect dipatch success\error action ith service result to store 
         reducer handle the success\error actions 
            for each success\error action reducer  update store
            for each success action, reducer  update store.pets
            for each error   action, reducer  update store.error
          once the store get updated
            component state is updated          (selector)
            and componnet template is updated   (ui)
    
    About
        state is immutalbe (Readonly). to update it, reducer create ne object. 
*/