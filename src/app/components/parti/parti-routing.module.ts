import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartiComponent} from './parti.component';


const routes: Routes = [
  {
    path: '',
    component: PartiComponent,
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

