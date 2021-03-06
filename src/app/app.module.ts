import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovidTrackingProjectComponent } from './covid-tracking-project/covid-tracking-project.component';
import { ApiNavigationComponent } from './api-navigation/api-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CovidTrackingProjectModule } from './covid-tracking-project/covid-tracking-project.module';

@NgModule({
  declarations: [
    AppComponent,
    // CovidTrackingProjectComponent,
    ApiNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CovidTrackingProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
