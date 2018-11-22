import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService } from './people/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic table component';
  people;
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
      data => {this.people = data, console.log(data)}
    )
  }
}
