import { Injectable } from '@angular/core';
import {BaseModel} from "./base.model";

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: BaseModel) {
  }

  list(options: any = {}) {
    this.http.resourceUrl = 'trending/movie/week';
    console.log('trenging',this.http.resourceUrl);
    return this.http.list(options);
  }
}
