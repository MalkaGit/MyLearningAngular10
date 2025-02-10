import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service'
import { Observable } from 'rxjs'; // Import Observable 

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


  getPets(): void {
      this.petService.getAll().subscribe({
        next: (data: Pet[]) => this.pets = data,  // On success, update the pets list
        error: (error) => this.errorMessage = error.message || 'Something went wrong!'  // Handle errors
      });
  }

  //async
  // async getPets(): Promise<void> {
  //   try {
  //     this.pets = await this.petService.getAll();
  //   } 
  //   catch (error :any) {
  //     this.errorMessage = error.message || 'Something went wrong!';
  //   }
  // }

  // getPets(): void {
  //   this.pets = this.petService.getAll();
  // }



  //Add or Update a pet
  addPet(): void {
    if (this.editIndex === null) {
      // Add
      this.petService.add(this.newOrUpdatedPet).subscribe({
        next: (addedPet: Pet) => this.pets.push({ ...addedPet }),  // create copy
        error: (error) => this.errorMessage = error.message || 'Failed to add item!'  // Handle errors
      });
    } else {
      // Update
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


  // async Add or Update a pet
  // async addPet(): Promise<void> {
  //   if (this.editIndex === null) 
  //   { //add
  //     try {
  //         const addedPet = await this.petService.add(this.newOrUpdatedPet);
  //         this.pets.push({ ...addedPet }); //create copy
  //     } 
  //     catch (error: any){
  //         this.errorMessage = error.message || 'Failed to add item!';
  //     }
  //   } 
  //   else 
  //   { //update
  //     try {
  //         await this.petService.update(this.newOrUpdatedPet);
  //         this.pets[this.editIndex] = { ...this.newOrUpdatedPet };//copy !
  //         this.editIndex = null;
  //     } 
  //     catch (error: any){
  //       this.errorMessage = error.message || 'Failed to update item!';
  //     }
  //   }
  //   this.resetForm();
  // }

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


  


  deletePet(index: number = 0): void {
    this.petService.delete(this.pets[index].id).subscribe({
      next: () => {
        this.pets.splice(index, 1);  // Remove pet from list
        if (this.editIndex === index) { // Reset form if edited pet is deleted
          this.resetForm();
        }
      },
      error: (error) => this.errorMessage = error.message || 'Failed to delete item!'  // Handle errors
    });
  }

  //async
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




  getItemById(id: number): void {
    this.petService.getById(id).subscribe({
      next: (pet: Pet) => console.log(pet), // Do something with the item
      error: (error) => this.errorMessage = error.message || 'Item not found!'  // Handle errors
    });
  }
  
  //not used
  // async getItemById(id: number): Promise<void> {
  //   try {
  //     const pet = await this.petService.getById(id);
  //     console.log(pet); // Do something with the item
  //   } catch (error :any) {
  //     this.errorMessage = error.message || 'Item not found!';
  //   }
  // }
}

//changes for observable instead aync await
// getPets(): Replaced async/await with the subscribe() method to handle the observable from petService.getAll().
// addPet() and updatePet(): Replaced async/await with subscribe() to handle observable responses for add and update operations.
// deletePet(): Used subscribe() to handle the observable from the delete operation.
// getItemById(): Similar change for getById() where subscribe() is used.

//Note:
  //constructor define a private service property
  //di: When Angular creates the component, the Dependency Injection system sets the service parameter to the singleton instance.
  //constructor(private petService: PetService) {}

  
 //Note: calling getPet in the constructor, is not the best practice.
 //      constructor  should be used for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
//       Instead, call getPets() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
//ngOnInit() 


