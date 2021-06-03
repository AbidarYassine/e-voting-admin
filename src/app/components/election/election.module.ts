import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElectionRoutingModule} from './election-routing.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ElectionComponent} from './election.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    ElectionComponent,
  ],
  imports: [
    CommonModule,
    ElectionRoutingModule,
    NgbDatepickerModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ]
})
export class ElectionModule {
}
