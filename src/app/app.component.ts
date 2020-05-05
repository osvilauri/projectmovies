import {Component, HostListener, OnInit} from '@angular/core';
import {MovieapiService} from "../services/movieapi.service";
import {ExternalapiService} from "../services/externalapi.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'projectmovies';
  movieData: MovieModel;
  get isMobile() {
    return this.size && this.size < 768;
  }
  size = null;
  @HostListener('window:resize')
  onWindowResize() {
    this.size = document.querySelector('body').offsetWidth;
  }
  constructor( private movie: MovieapiService, private externalapi: ExternalapiService){}
  ngOnInit() {
    // fetch("http://localhost:3000/favourites")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch( error => console.log(error));
    this.movie.getStarred().subscribe(
        (res) => {
          console.log(res);
          },
        error =>{
          console.log(error)
    });

    this.getByid(1);

    this.list();

    // this.movie.postStarred(data).subscribe(
    //     (res) => {
    //       console.log(res);
    //     },
    //     error =>{
    //       console.log(error)
    //     });
  }

  getByid(id) {
    this.movie.getStarredId(id).subscribe(
        (res) => {
         console.log(res)
        },
        error =>{
          console.log(error)
        });
  }

  list(){
         this.externalapi.getMovies().subscribe((res: any) => {
             this.movieData = res.results;
             console.log(this.movieData)
         } , error => console.log(error))
  }
}
