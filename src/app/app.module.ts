import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { PeopleModule } from './people/people.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopperComponent } from './popper/popper.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    PopperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TabsModule,
    PeopleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
