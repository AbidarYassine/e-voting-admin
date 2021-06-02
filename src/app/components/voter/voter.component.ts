// @ts-ignore
import {Component, OnInit, ViewChild} from '@angular/core';

// @ts-ignore
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {VoterService} from '../../services/voter-service.service';


// @ts-ignore
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent implements OnInit {
  // rows = [];
  //
  // temp = [];
  //
  // columns = [{prop: 'name'}, {name: 'Company'}, {name: 'Gender'}];
  // @ViewChild(DatatableComponent) table: DatatableComponent;
  //
  // ColumnMode = ColumnMode;
  rows: any = [];
  totalCount: Number = 0;
  closeResult: string;
  dataParams: any = {
    page_num: '',
    page_size: ''
  };

  ngOnInit() {
    this.dataParams.page_num = 1;
    this.dataParams.page_size = 20;
    this.getAllVoter();
  }


  getAllVoter() {

    this.voter_service.getall().subscribe((data) => {
      this.rows = data;
      this.totalCount = data.length;
      console.log(data);
    });
  }

  constructor(private voter_service: VoterService) {
    // this.fetch(data => {
    //   // cache our list
    //   this.temp = [...data];
    //
    //   // push our inital complete list
    //   this.rows = data;
    // });
    this.voter_service.getall().subscribe((data) => {
      this.rows = data;
      console.log(data);
    });
  }


  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //
  //   // filter our data
  //   const temp = this.temp.filter(function (d) {
  //     return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });
  //
  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }


  accept(row: any) {
    console.log(row);
  }

  reject(value: any) {
    console.log(value);
  }
}
