import {VoterComponent} from './voter.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoterRoutingModule} from './voter-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VoterComponent
  ],
  imports: [
    CommonModule,
    VoterRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VoterModule {
}
