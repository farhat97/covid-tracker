import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CovidTrackingProjectService {

  private baseUrl = "https://covidtracking.com/api/v1";

  getDailyResults() {
    let url = this.baseUrl + "/us/daily.json";
    console.log('api endpoint: ', url);

    return this.httpClient.get(url);
  }

  constructor(private httpClient: HttpClient) { }
  
}
