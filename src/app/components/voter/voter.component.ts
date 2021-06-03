// @ts-ignore
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

// @ts-ignore
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {VoterService} from '../../services/voter-service.service';
import {Voter} from '../../models/voter.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {isValidLimit} from 'ngx-bootstrap/timepicker/timepicker.utils';


// @ts-ignore
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent implements OnInit {
  cin = new FormControl('', [Validators.required]);
  voter_found: boolean = false;
  voter: Voter;

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
      console.log(voters);
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


  Accept(value: any) {
    console.log(value);
  }

  Reject(value: any) {

  }

  findByCin(value?: string) {
    this.voterService.getall().subscribe((voters: any) => {
      let found;
      console.log(value);
      if (value) {
        found = voters.filter(voter => voter.cin === value);
      } else {
        found = voters.filter(voter => voter.cin === this.cin.value);
      }
      if (found.length === 0) {
        this.voter_found = false;
        Swal.fire({
          title: 'Voter Not  Found!',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      } else {
        this.voter_found = true;
        this.voter = found[0];
        console.log('voter found', this.voter);
        Swal.fire({
          title: 'Voter Found!',
          text: 'Check Data below',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      }
    });
  }
}
