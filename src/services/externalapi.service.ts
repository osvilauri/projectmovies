import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExternalapiService {
  api_key = '45bf6592c14a965b33549f4cc7e6c664';
  externalUrl = 'https://api.themoviedb.org/3/discover/movie';
  include_video = false;
  popularity = { asc: 'ASC', desc: 'DESC'};
  page=1;
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(`${this.externalUrl}?api_key=${this.api_key}&sort_by=${this.popularity.asc}&include_video=${this.include_video}&page=${this.page}`)
  }
}
