//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { Injectable } from '@angular/core';
import { Actions, ofType,createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';
import * as PetActions from './pet.actions';


@Injectable()
export class PetEffects {
  constructor(private actions$: Actions, private petService: PetService) {}

  // Get All Pets Effect
  getAllPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.getAllPets),                                                        //Listens for "getAllPets" action
      mergeMap(() =>
        this.petService.getAll().pipe(                                                      //call service that return Observable
          map((pets: Pet[]) => PetActions.getAllPetsSuccess({ pets })),                    //on service success, effect Dispatch success action
          catchError((error) => of(PetActions.getAllPetsFailure({ error: error.message })))//on service error, effect Dispatch failure action 
        )
      )
    )
  );

  // Add Pet Effect
  addPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.addPet),                                                       //Listens for "addPet" action
      mergeMap((action) =>
        this.petService.add(action.pet).pipe(
          map((pet: Pet) => PetActions.addPetSuccess({ pet })),                        //on service success, effect Dispatch success action
          catchError((error) => of(PetActions.addPetFailure({ error: error.message })))//on service error, effect Dispatch failure action 
        )
      )
    )
  );

  // Update Pet Effect
  // Note: petService.update return pet although rest api does not.  pet is  later by reducer  to update the store state (data is updated and so ui update automatically) 
  updatePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.updatePet),                                                        //Listens for "updatePet" action
      mergeMap((action) =>
        this.petService.update(action.pet).pipe(
          map((pet: Pet)=> PetActions.updatePetSuccess({ pet })),                           //!!!!!!! on service success, effect Dispatch success action
          catchError((error) => of(PetActions.updatePetFailure({ error: error.message }))) //on service error, effect Dispatch failure action 
        )
      )
    )
  );

  // Delete Pet Effect
  deletePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.deletePet),                                                           //Listens for "deletePet" action
      mergeMap((action) =>
        this.petService.delete(action.id).pipe(
          map((id: number) => PetActions.deletePetSuccess( {id})),                            //on service success, effect Dispatch success action     
          catchError((error) => of(PetActions.deletePetFailure({ error: error.message })))    //on service error, effect Dispatch failure action 
        )
      )
    )
  );
}

/*
Effet 
A. goal
   register to actions dispatched by component.
   for each action
      call the petService (return observable)
      if service complete successfully, emit the sucess action and dispatch it  (createEffect dispatch it)
      otherise,                         emit the error action and dispatch it   (createEffect dispatch it) 

B.
    about the constructor
    constructor(private actions$: Actions, private petService: PetService) {}
        private actions$: 
            define data member called actions$
            it is a stream of all dispatched actions.
            This is an observable that emits every dispatched action in the application.
            Effects listen to this stream and react when specific actions are dispatched.
        petService: PetService → The service that performs API operations (e.g., HTTP requests).
            This is your custom service that interacts with an API (e.g., fetch, update, delete pets).
            Effects use this service to call the backend when an action is dispatched.

    about createEffect(() => map(()=>), catchError (()=>))
      all the effect create ue the patter

      map and catchError emit the action  by calling PetActions.YYYY (no this.store.dispatch(PetActions....))
      it gets dispatched automatically by createEffect() 
*/
