import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Candidate} from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private API: string = 'http://localhost:3000/candidate';
  private headers = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Authorization', 'Basic ' + btoa('admin:adminpw'));
  }

  getall(): Observable<Candidate[]> {
    return this.http.get(this.API.toString(), {headers: this.headers}).pipe(catchError(this.hendelError));
  }

  create(ressource: Candidate): Observable<Candidate> {
    return this.http.post(this.API.toString(), ressource, {headers: this.headers}).pipe(catchError(this.hendelError));
  }

  private hendelError(err: Response): Observable<any> {
    if (err.status === 400) {
      return throwError('');
    } else if (err.status === 404) {
      return throwError('not found');
    } else {
      return throwError(('Error Unexpected'));
    }
  }
}
