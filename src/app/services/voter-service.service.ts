import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Voter} from '../models/voter.model';


@Injectable({
  providedIn: 'root'
})
export class VoterService extends DataService {
  constructor(http: HttpClient) {
    super('http://localhost:3000/voter', http);
  }

  getByCin(cin: string): any {
    this.getall().subscribe((voters: any) => {
      voters.forEach((el: Voter) => {
        if (el.cin === cin) {
          console.log(el);
          return el;
        }
      });
      return null;
    });
  }
}
