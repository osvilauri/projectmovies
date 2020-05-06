import { Injectable } from '@angular/core';
import {BaseModel} from "./base.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: BaseModel) {
  }

  list(options: any = {}) {
    this.http.resourceUrl = 'search/movie';
    return this.http.list(options);
  }
}
