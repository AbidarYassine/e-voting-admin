import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getall(): Observable<any> {
    return this.http.get(this.url.toString()).pipe(catchError(this.hendelError));
  }

  create(ressource: any): Observable<any> {
    return this.http.post(this.url.toString(), ressource).pipe(catchError(this.hendelError));
  }

  update(ressource: any): Observable<any> {
    return this.http.put(this.url + '/' + ressource.id, ressource).pipe(catchError(this.hendelError));
  }

  delete(ressource: any): Observable<any> {
    //   return this.http.delete(this.URL + "/" + p.id).pipe(catchError((err: Response) => {
    //       return this.hendelError(err);
    //     }
    //   ));
    return this.http.delete(this.url + '/' + ressource.id).pipe(catchError(this.hendelError));
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
