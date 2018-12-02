import { Component, OnInit } from '@angular/core';
import { PetService } from './pets.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;
  message;
  message2;
  petTxt;
  constructor(private petsService: PetService) { }

  ngOnInit() {
  }

  getPets() {
    return this.petsService.getPetsData().subscribe(
      (res) => { this.pets$ = res },
      (err: HttpErrorResponse) => {
        if(err instanceof Error) {
          this.message = `An error occured ${err}`
        } else {
          this.message = `Backend error ${err.status}`
        }
      }
    )
  }

  addPet() {
    return this.petsService.postPet().subscribe(
        (res) => console.log(res),
        (err: HttpErrorResponse) => {
          if(err instanceof Error) {
            // client error
            this.message2 = `An error occured ${err}`
          } else {
            this.message2 = `Backend error ${err.status}`
            console.log(this.message2)
          }
        })
  }

  getUnavailable() {
    return this.petsService.getUnavailableData()
    .subscribe()
  }

  fetchPetsHeaders() {
    return this.petsService.fetchPetsWithHeaders()
      .subscribe((res) => {
        console.log(res);
        // to get some custom headers
        // console.log(res.headers.get('custom-headers'));
        this.pets$ = res;
      })
  }

  getPetsTxt() {
    return this.petsService.getPetsTxtFormat().subscribe(
      data => this.petTxt = data
    )
  }


}
