import {Component, OnInit} from '@angular/core';
import API_KEY from "../api.key";
import {MovieModel, StarredModel} from "../../models/movie.model";
import {MovieService} from "../../services/movie.service";
import {MovieapiService} from "../../services/movieapi.service";
import {TrendingService} from "../../services/trending.service";

@Component({
  selector: 'app-kids',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.less']
})
export class FavouritesComponent implements OnInit {
  movieData: MovieModel[] = [];
  movieTrending: MovieModel[] = [];
  movieStarred: StarredModel[] = [];
  favouriteData: MovieModel[] = [];
  spinning = false;
  page = 1;
  sorter = {
    asc: 'popularity.asc',
    desc: 'popularity.desc'
  };

  constructor(private movies: MovieService, private trending: TrendingService, private favourite: MovieapiService) {

  }

  ngOnInit(): void {
    this.listFav();
  }

  listFav(initial: boolean = true){
    this.spinning = true;
    const params: any = {
      api_key: API_KEY,
      page: this.page,
      sort_by: this.sorter.asc,
      include_video: false
    };
    this.movies.list({ params }).subscribe((res: any) => {
      if(initial === true){
        this.movieData = res.results;
      } else {
        this.movieData = [];
        this.movieData = res.results;
      }

      this.listTrend();
      this.getStarred();
    } , error => {console.log(error); this.spinning = false;});
  }

  listTrend(){
    const params: any = {
      api_key: API_KEY,
      page: this.page,
      sort_by: this.sorter.asc,
      include_video: false
    };
    this.trending.list({ params }).subscribe((res: any) => {
      this.movieTrending = res.results;
    } , error => console.log(error));
  }

  getStarred() {
    this.favourite.getStarred()
        .subscribe( res => {
          this.movieStarred = res;
          this.getFavouriteMovie();
        }, error => {
          console.log(error);
        });
  }

  onSearch(event):void {
    this.spinning = true;
    if(event){
      this.favouriteData = this.favouriteData.filter( (item: MovieModel) => item.title === event);
      console.log(this.favouriteData);
      this.spinning = false;
    } else {
      this.listFav(false)
    }
  }

 getFavouriteMovie() {
   this.movieStarred.map( item => {
    const movie = this.movieData.find(value => value.id === item.idMovie);
    const trending = this.movieTrending.find(value => value.id === item.idMovie);
      if(movie){
        this.favouriteData.push(movie)
      } else if(trending){
        this.favouriteData.push(trending)
      }
   });
   this.spinning = false;
  }
}
