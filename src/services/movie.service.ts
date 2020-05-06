import { Injectable } from '@angular/core';
import {BaseModel} from "./base.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: BaseModel) {
  }

  list(options: any = {}) {
    this.http.resourceUrl = 'discover/movie';
    console.log('movies',this.http.resourceUrl);
    return this.http.list(options);
  }
}
