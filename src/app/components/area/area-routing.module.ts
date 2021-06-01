import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CandidateComponent} from '../candidate/candidate.component';
import {AreaComponent} from './area.component';



const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
    data: {
      title: 'Areas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
