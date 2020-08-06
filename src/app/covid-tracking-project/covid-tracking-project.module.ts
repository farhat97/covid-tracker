import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { CovidTrackingProjectComponent } from './covid-tracking-project.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [ CovidTrackingProjectComponent ],
    imports: [ MatTableModule, CommonModule, NgxPaginationModule ],
    providers: [ ]
})

export class CovidTrackingProjectModule { }