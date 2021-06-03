import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Voter} from '../../models/voter.model';
import {Candidate} from '../../models/candidate';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {ActivatedRoute} from '@angular/router';
import {VoterService} from '../../services/voter-service.service';
import {CandidateService} from '../../services/candidate.service';
import {Modal} from '../../modal.service';
import {AddCandidateComponent} from './add-candidate/add-candidate.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  public title: String = '';

  candidats$: Observable<Candidate[]>;

  editing = {};

  // utilisé pour l'affichage dans le html
  rows = [];

  // sera utilisé pour la recherche
  temp = [];
  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidate_service: CandidateService,
    public dialog: MatDialog
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
    });

  }

  ngOnInit(): void {
    this.candidate_service.getall().subscribe((candidates) => {
      console.log(candidates);
      this.rows = candidates;
      this.temp = candidates;
      // console.log("Les données",this.rows);
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.nomSGP.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  showAddCandidatModal(candidate?: Candidate) {
    const dialogRef = this.dialog.open(AddCandidateComponent, {
      width: '700px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
