import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AreaComponent} from './area.component';
import {AreaRoutingModule} from './area-routing.module';


@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
  ]
})
export class AreaModule {
}
