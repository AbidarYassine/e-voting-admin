// @ts-ignore
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

// @ts-ignore
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {VoterService} from '../../services/voter-service.service';
import {Page} from '../../models/page';
import {Voter} from '../../models/voter.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


// @ts-ignore
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent implements OnInit {

  public title: String = '';

  voters$: Observable<Voter[]>;

  editing = {};

  // utilisé pour l'affichage dans le html
  rows = [];

  // sera utilisé pour la recherche
  temp = [];

  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private voterService: VoterService,
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
    });

  }

  ngOnInit(): void {
    this.voterService.getall().subscribe((voters) => {
      this.rows = voters;
      this.temp = voters;
      // console.log("Les données",this.rows);
    });
  }


  showCrupdateProfessor() {

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.nom.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  Accept() {
  }

  Reject(value: any) {

  }
}
