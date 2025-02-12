//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { createAction, props } from '@ngrx/store';
import { Pet } from '../models/pet.model';

// Get All Pets Actions     for getAll(): Observable<Pet[]>
export const getAllPets         = createAction('[Pet] Get All Pets');
export const getAllPetsSuccess  = createAction('[Pet] Get All Pets Success', props<{ pets: Pet[] }>());
export const getAllPetsFailure  = createAction('[Pet] Get All Pets Failure', props<{ error: string }>());

// Add Pet Actions          for add(pet: Pet): Observable<Pet>
export const addPet = createAction('[Pet] Add Pet',                         props<{ pet: Pet }>());
export const addPetSuccess = createAction('[Pet] Add Pet Success',          props<{ pet: Pet }>());
export const addPetFailure = createAction('[Pet] Add Pet Failure',          props<{ error: string }>());

// Update Pet Actions       for update(pet: Pet): Observable<Pet>
export const updatePet = createAction('[Pet] Update Pet',                   props<{ pet: Pet }>());
export const updatePetSuccess = createAction('[Pet] Update Pet Success',    props<{ pet: Pet }>()); //FI: Note: action hold  updated pet from effect, although rest api does not have to return it 
export const updatePetFailure = createAction('[Pet] Update Pet Failure',    props<{ error: string }>());

// Delete Pet Actions        delete(id: number): Observable<number>     
export const deletePet          = createAction('[Pet] Delete Pet',          props<{ id: number }>());
export const deletePetSuccess   = createAction('[Pet] Delete Pet Success',  props<{ id: number }>() );
export const deletePetFailure   = createAction('[Pet] Delete Pet Failure',  props<{ error: string }>());

// Load pet by ID
export const loadPet            = createAction('[Pet] Load Pet',            props<{ id: number }>());
export const loadPetSuccess     = createAction('[Pet] Load Pet Success',    props<{ pet: Pet }>());
export const loadPetFailure     = createAction('[Pet] Load Pet Failure',    props<{ error: string }>());

/* 
A.service method return obervable
B. This file define actions that can be dipatched and handled
   Here we define actions for CRUD operations: loading pets, adding, updating, and deleting pets.
*code
        actions signature match the service api 
        In NgRx, actions are dispatched to change the state.

*/