import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetService } from './pets.service';

@NgModule({
  imports: [CommonModule],
  declarations: [PetsComponent],
  exports: [PetsComponent],
  providers: [PetService],
})
export class PetsModule {}
