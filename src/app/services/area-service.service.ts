import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Parti} from '../models/parti.model';
import {Area} from '../models/area.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private _area: Area | null;

  constructor(private http: HttpClient) {
    this._area = null;
  }

  public save(areaName: string): any {
    const newArea: Area = new Area();
    newArea.name = areaName;

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa('admin:adminpw'));

    this.http
      .post<Area>('http://localhost:3000/api/create-area', newArea, {headers: headers})
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
    return this.http.get('http://localhost:3000/api/getAllAreas').pipe(catchError(this.handleError));
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
