import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ElectionComponent} from './election.component';

const routes: Routes = [
  {
    path: '',
    component: ElectionComponent,
    data: {
      title: 'Elections'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionRoutingModule {
}
