import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiComponent } from './parti.component';
import {PartiRoutingModule} from './parti-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PartiComponent
  ],
  imports: [
    CommonModule,
    PartiRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ]
})
export class PartiModule { }
