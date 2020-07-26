import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CovidTrackingProjectComponent } from './covid-tracking-project/covid-tracking-project.component';
import { ApiNavigationComponent } from './api-navigation/api-navigation.component';


const routes: Routes = [
  {
    path: 'home',
    component: ApiNavigationComponent,
  },
  {
    path: 'covid-tracking-project',
    component: CovidTrackingProjectComponent
  },
  {
    path: '**',
    redirectTo: 'home' // all undefined routes go to home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
