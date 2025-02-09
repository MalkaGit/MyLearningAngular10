import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service'


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  public errorMessage: string = '';  //the error from the service 
  public pets: Pet[] = [];
  public newOrUpdatedPet: Pet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
  public editIndex: number | null = null;  

   constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  async getPets(): Promise<void> {
    try {
      this.pets = await this.petService.getAll();
    } 
    catch (error :any) {
      this.errorMessage = error.message || 'Something went wrong!';
    }
  }
  // getPets(): void {
  //   this.pets = this.petService.getAll();
  // }


  // Add or Update a pet
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
  // addPet() {
  //   if (this.editIndex === null) {
  //     //add
  //     const addedPet = this.petService.add(this.newOrUpdatedPet);
  //     this.pets.push({ ...addedPet }); //create copy
  //   } else {
  //     //update
  //     const updatedPet :Boolean = this.petService.update(this.newOrUpdatedPet);
  //     if (updatedPet)
  //       this.pets[this.editIndex] = { ...this.newOrUpdatedPet };//copy !
  //     this.editIndex = null;
  //   }
  //   this.resetForm();
  // }

  

  // Edit pet (loads data into the form)
  editPet(index: number) {
    this.newOrUpdatedPet = { ...this.pets[index] }; //copy
    this.editIndex = index;
  }

  // Delete pet
  async deletePet(index: number = 0): Promise<void> {
    try 
    {  
      await this.petService.delete(this.pets[index].id);
      this.pets.splice(index, 1);
      if (this.editIndex === index) { //in case deleted pet is editted
               this.resetForm();
      }
    } catch (error :any ) 
    {
      this.errorMessage = error.message || 'Failed to delete item!';
    }
  }
  // deletePet(index: number) {
  //   const deletedPet :Boolean = this.petService.delete(this.pets[index].id);
  //   if (deletedPet) {
  //     this.pets.splice(index, 1);
  //     if (this.editIndex === index) { //in case deleted pet is editted
  //       this.resetForm();
  //     }
  //   }
  // }

  // Reset the form
  resetForm() {
    this.newOrUpdatedPet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
    this.editIndex = null;
  }


  //not used
  async getItemById(id: number): Promise<void> {
    try {
      const pet = await this.petService.getById(id);
      console.log(pet); // Do something with the item
    } catch (error :any) {
      this.errorMessage = error.message || 'Item not found!';
    }
  }
}


//Note:
  //constructor define a private service property
  //di: When Angular creates the component, the Dependency Injection system sets the service parameter to the singleton instance.
  //constructor(private petService: PetService) {}

  
 //Note: calling getPet in the constructor, is not the best practice.
 //      constructor  should be used for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
//       Instead, call getPets() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
//ngOnInit() 


