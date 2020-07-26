import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'covid-tracker';

  // listen to queryParams for routing purposes
  routeQueryParams: Subscription;

  constructor(private router: Router) {
    this.router.navigate(['/']);
  }

}
