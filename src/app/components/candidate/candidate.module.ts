import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateComponent} from './candidate.component';


import {CandidateRoutingModule} from './candidate-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatDialogModule} from '@angular/material/dialog';
import {AddCandidateComponent} from './add-candidate/add-candidate.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CandidateComponent,
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    AddCandidateComponent
  ]
})
export class CandidateModule {
}
