import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { PeopleModule } from './people/people.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopperComponent } from './popper/popper.component';
import { PetsModule } from './pets/pets.module';
import { UploadService } from './upload.service';
import { MyLogHttpInterceptor } from './http.interceptor';

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
    HttpClientModule,
    PetsModule,
  ],
  providers: [
    UploadService,
    { provide: HTTP_INTERCEPTORS, useClass: MyLogHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
