import { Component, OnInit } from '@angular/core';
import { CovidTrackingProjectService } from '../shared/covid-tracking-project.service';

@Component({
  selector: 'app-covid-tracking-project',
  templateUrl: './covid-tracking-project.component.html',
  styleUrls: ['./covid-tracking-project.component.css']
})
export class CovidTrackingProjectComponent implements OnInit {

  constructor(private apiService: CovidTrackingProjectService) { }
  
  // objectKeys object is used to be able to iterate both keys and values from apiResultArray with *ngFor
  objectKeys = Object.keys;
  apiResultArray = { };

  ngOnInit(): void {

  }

  callApi() {
    // this.apiResult = this.apiService.getDailyResults();
    let obj = [];

    this.apiService.getDailyResults().subscribe((reports) => {
      
      console.log('last report: ', reports[0]);

      this.formatApiResult(JSON.stringify(reports[0]));
    });

    // reload page
    this.ngOnInit();
  }

  // used for formatting and getting rid of things that are not needed
  formatApiResult(result) {

    let resultObj = JSON.parse(result);
    let covidApiResults = { };

    // add desired fields to covidApiResults object
    covidApiResults["Date"] = resultObj["date"];
    covidApiResults["Tracked States (or territories)"] = resultObj["states"];
    covidApiResults["Positive Cases"] = resultObj["positive"];
    covidApiResults["Positive Cases Increase"] = resultObj["positiveIncrease"];
    covidApiResults["Negative Cases"] = resultObj["negative"];
    covidApiResults["Negative Cases Increase"] = resultObj["negativeIncrease"];
    covidApiResults["Pending Resuls"] = resultObj["pending"];
    covidApiResults["Hospitalized Currently"] = resultObj["hospitalizedCurrently"];
    covidApiResults["Hospitalized Cumulative"] = resultObj["hospitalizedCumulative"];
    covidApiResults["Hospitalized Increase"] = resultObj["hospitalizedIncrease"];
    covidApiResults["Currently in ICU"] = resultObj["inIcuCurrently"];
    covidApiResults["Cumulative in ICU"] = resultObj["inIcuCumulative"];
    covidApiResults["Currently on Ventilator"] = resultObj["onVentilatorCurrently"];
    covidApiResults["Cumulative on Ventilator"] = resultObj["onVentilatorCumulative"];
    covidApiResults["Recovered Cases"] = resultObj["recovered"];
    covidApiResults["# of Deaths"] = resultObj["death"];
    covidApiResults["Increase in Deaths"] = resultObj["deathIncrease"];

    this.apiResultArray = covidApiResults;
  }

}
