import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Parti} from '../models/parti.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartiService {
  private _parti: Parti | null;

  constructor(private http: HttpClient) {
    this._parti = null;
  }

  public save(partiName: string): any {
    const newParti: Parti = new Parti();
    newParti.name = partiName;

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa('admin:adminpw'));

    this.http
      .post<Parti>('http://localhost:3000/api/create-parti', newParti, {headers: headers})
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
    return this.http.get('http://localhost:3000/api/getAllParties').pipe(catchError(this.handleError));
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
