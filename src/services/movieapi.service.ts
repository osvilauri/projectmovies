import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  apiUrl = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private extractData(res: Response) {
    return res || { };
  }

  constructor(private http: HttpClient) {

  }

  getStarred(): Observable<any> {
    return this.http.get(this.apiUrl+'starred_movies')

  }

  getStarredId(id): Observable<any> {
    return this.http.get(`${this.apiUrl}starred_movies/idMovie/${id}`)
  }

  postStarred(data): Observable<any> {
    return this.http.post(this.apiUrl+'starred_movies', data)
  }

  updateStarred(id, data): Observable<any> {
    return this.http.put(`${this.apiUrl}starred_movies/idMovie/${id}`,data)
  }

}
