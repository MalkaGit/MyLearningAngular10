//model, service, action, effect,reducer ,  selectors, componet class, component template, class AppModule
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetComponent } from './components/pet/pet.component';

//for redux: start 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { petReducer } from './store/pet.reducer';
import { PetEffects } from './store/pet.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//for redux: end 


@NgModule({
  declarations: [
    AppComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    //for Two-way binding:  [(ngModel)]
    FormsModule,
    // for redux: Register the reducer
    StoreModule.forRoot({ pets: petReducer }),  
    // for redux: Register the Effects
    EffectsModule.forRoot([PetEffects]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })         // for redux: Register the effects
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 //for Two-way binding:  for [(ngModel)] to work in pet.component.html.
//import { FormsModule } from '@angular/forms';
//imports: [   FormsModule,


//for redux NgRx Store
//StoreModule.forRoot({ pets: petReducer }), 
//Registers the petReducer in NgRx Store.
//This ensures that when store.select(...) is called in your component, the store is available.

//for redux NgRx Store
//EffectsModule.forRoot([PetEffects])
//Registers the PetEffects, allowing side effects (like API calls) to work with the store.
