import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Election} from '../models/election.model';
import {Area} from '../models/area.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  private election: Election | null;

  constructor(private http: HttpClient) {
    this.election = null;
  }

  public save(name: string, year: number, startDate: string, endDate: string): any {
    const newElection: Election = new Election();
    newElection.name = name;
    newElection.year = year;
    newElection.startDate = new Date(Date.parse(startDate));
    newElection.endDate = new Date(Date.parse(endDate));

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa('admin:adminpw'));

    this.http
      .post<Election>('http://localhost:3000/api/create-area', newElection, {headers: headers})
      .subscribe(
        (data) => {
          if (data != null) {
            console.log(data);
          }
        },
        (eror) => {
          console.log(eror);
        }
      );
  }

  public getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getAllElections').pipe(catchError(this.handleError));
  }

  private handleError(err: Response): Observable<any> {
    if (err.status === 400) {
      return throwError('');
    } else if (err.status === 404) {
      return throwError('not found');
    } else {
      return throwError(('Error Unexpected'));
    }
  }
}
