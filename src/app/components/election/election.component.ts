import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Election} from '../../models/election.model';
import {ElectionService} from '../../services/election-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  electionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
  });

  electionName = new FormControl('', [Validators.required]);
  election_found: boolean = false;
  election: Election;
  title: String = '';
  elections: Observable<Election[]>;
  editing = {};
  rows = [];
  temp = [];

  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private electionService: ElectionService,
    private modalService: NgbModal
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
    });

  }

  ngOnInit(): void {
    this.electionService.getAll().subscribe((voters) => {
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

  findByAreaName(value?: string) {
    this.electionService.getAll().subscribe((areas: any) => {
      let found;
      console.log(value);
      if (value) {
        found = areas.filter(area => area.area === value);
      } else {
        found = areas.filter(area => area.area === this.electionName.value);
      }
      if (found.length === 0) {
        this.election_found = false;
        Swal.fire({
          title: 'Election Not  Found!',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      } else {
        this.election_found = true;
        this.election = found[0];
        console.log('Area found', this.election);
        Swal.fire({
          title: 'Election Found!',
          text: 'Check Data below',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      }
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    const value = this.electionForm.value;
    console.warn(this.electionForm.value);
    this.electionService.save(value.name, value.year, value.startDate, value.endDate);
  }
}
