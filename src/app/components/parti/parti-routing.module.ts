import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CandidateComponent} from '../candidate/candidate.component';


const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    data: {
      title: 'partis'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PartiRoutingModule {
}

