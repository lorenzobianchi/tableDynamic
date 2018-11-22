import { PeopleService } from './people.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
// import { PersonEditComponent } from './person-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [PeopleListComponent, ],
  providers: [PeopleService],
  exports: [PeopleListComponent]
})
export class PeopleModule {}
