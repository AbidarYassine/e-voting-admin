import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import {Area} from '../../models/area.model';
import {AreaService} from '../../services/area-service.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  areaForm = new FormGroup({
    areaName: new FormControl('', Validators.required)
  });

  areaName = new FormControl('', [Validators.required]);
  area_found: boolean = false;
  area: Area;
  title: String = '';
  areas: Observable<Area[]>;
  editing = {};
  rows = [];
  temp = [];

  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    private modalService: NgbModal
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title;
    });

  }

  ngOnInit(): void {
    this.areaService.getAll().subscribe((voters) => {
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
    this.areaService.getAll().subscribe((areas: any) => {
      let found;
      console.log(value);
      if (value) {
        found = areas.filter(area => area.area === value);
      } else {
        found = areas.filter(area => area.area === this.areaName.value);
      }
      if (found.length === 0) {
        this.area_found = false;
        Swal.fire({
          title: 'Area Not  Found!',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      } else {
        this.area_found = true;
        this.area = found[0];
        console.log('Area found', this.area);
        Swal.fire({
          title: 'Area Found!',
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
    console.warn(this.areaForm.value);
    this.areaService.save(this.areaForm.value);
  }
}
