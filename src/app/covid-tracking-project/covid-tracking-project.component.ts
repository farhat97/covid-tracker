import { Component, OnInit } from '@angular/core';
import { CovidTrackingProjectService } from '../shared/covid-tracking-project.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-covid-tracking-project',
  templateUrl: './covid-tracking-project.component.html',
  styleUrls: ['./covid-tracking-project.component.css']
})

export class CovidTrackingProjectComponent implements OnInit {
  
  // determines if API data is available
  isApiDataAvailable: boolean = false;

  // Bootstrap related
  // objectKeys object is used to be able to iterate both keys and values from apiResultArray with *ngFor
  objectKeys = Object.keys;
  apiResultObj = { };
  tablePage: number = 1;

  constructor(private apiService: CovidTrackingProjectService) { }

  ngOnInit(): void {
    this.apiService.getDailyResults().subscribe((reports) => {
      console.log('last report: ', reports[0]);

      this.formatApiResult(JSON.stringify(reports[0]));
    });
  }

  // used for formatting and getting rid of things that are not needed
  formatApiResult(result) {

    let resultObj = JSON.parse(result);
    let covidApiResults = { };

    // add desired fields to covidApiResults object
    covidApiResults["Date"] = this.formatDate(resultObj["date"]);
    covidApiResults["Tracked States (or territories)"] = resultObj["states"];
    // use toLocaleString() to add commas every 3 digits
    covidApiResults["Positive Cases"] = resultObj["positive"].toLocaleString();
    covidApiResults["Positive Cases Increase"] = resultObj["positiveIncrease"].toLocaleString();
    covidApiResults["Negative Cases"] = resultObj["negative"].toLocaleString();
    covidApiResults["Negative Cases Increase"] = resultObj["negativeIncrease"].toLocaleString();
    covidApiResults["Pending Resuls"] = resultObj["pending"].toLocaleString();
    covidApiResults["Hospitalized Currently"] = resultObj["hospitalizedCurrently"].toLocaleString();
    covidApiResults["Hospitalized Cumulative"] = resultObj["hospitalizedCumulative"].toLocaleString();
    covidApiResults["Hospitalized Increase"] = resultObj["hospitalizedIncrease"].toLocaleString();
    covidApiResults["Currently in ICU"] = resultObj["inIcuCurrently"].toLocaleString();
    covidApiResults["Cumulative in ICU"] = resultObj["inIcuCumulative"].toLocaleString();
    covidApiResults["Currently on Ventilator"] = resultObj["onVentilatorCurrently"].toLocaleString();
    covidApiResults["Cumulative on Ventilator"] = resultObj["onVentilatorCumulative"].toLocaleString();
    covidApiResults["Recovered Cases"] = resultObj["recovered"].toLocaleString();
    covidApiResults["# of Deaths"] = resultObj["death"].toLocaleString();
    covidApiResults["Increase in Deaths"] = resultObj["deathIncrease"].toLocaleString();

    this.apiResultObj = covidApiResults;
    
    this.isApiDataAvailable = true;
  }

  formatDate(date) {
    // date (retrieved from api) is in the following format: year month day (with no spaces)
    date = date.toString();
    
    // use substring to get year, month and day from the date string
    // ranges: year (0, 4) | month (4, 6) | day (6, 8)
    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);

    // assign values to formattedString variable and return
    let formattedDate = month + " / " + day + " / " + year;
    console.log('formatted date ', formattedDate);

    return formattedDate;
  }

}
