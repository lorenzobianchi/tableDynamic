import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { PeopleService } from './people/people.service';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Dynamic table component';
  @ViewChild('personEdit') personEditTemplete;
  @ViewChild(TabsComponent) tabsComponent;
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
      data => {this.people = data, console.log(data)}
    )
  }

  ngAfterViewInit() {
    console.log(this.personEditTemplete)
  }

  onAddPerson() {
    console.log('yo')
    this.tabsComponent.openTab(
      'Dynamic Tabs',
      this.personEditTemplete,
      this.people[0]
    );
  }
}
