import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovidTrackingProjectComponent } from './covid-tracking-project/covid-tracking-project.component';
import { ApiNavigationComponent } from './api-navigation/api-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidTrackingProjectComponent,
    ApiNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
