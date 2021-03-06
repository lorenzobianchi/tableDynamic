import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { PeopleService } from './people/people.service';
import { UploadService } from './upload.service';
import { TabsComponent } from './tabs/tabs.component';

import { HttpEventType, HttpResponse } from '@angular/common/http';

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
  output;
  constructor(
    private peopleService: PeopleService,
    private uploadService: UploadService
  ) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
      data => {this.people = data, console.log(data)}
    )
  }

  ngAfterViewInit() {
    console.log(this.personEditTemplete)
  }

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.personEditTemplete,
      person,
      true
    )
  }

  onAddPerson() {
    this.tabsComponent.openTab(
      'New Person',
      this.personEditTemplete,
      {},
      true
    );
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    this.tabsComponent.closeActiveTab();
  }

  uploadAvatar(fileupload) {
    const formData = new FormData();
    formData.append('avatar', fileupload[0])

    this.uploadService
      .uploadAvatar(formData)
      .subscribe(res => {
        if (res.type === HttpEventType.UploadProgress) {
          const percentage = Math.round(100 * res.loaded / res.total)
          this.output = `File is ${percentage}% uploaded!`;
        } else if (res instanceof HttpResponse) {
          this.output = 'The file is completely uploaded!'
        }
      })
  }
}
