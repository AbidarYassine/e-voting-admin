import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiComponent } from './parti.component';
import {PartiRoutingModule} from './parti-routing.module';



@NgModule({
  declarations: [
    PartiComponent
  ],
  imports: [
    CommonModule,
    PartiRoutingModule
  ]
})
export class PartiModule { }
