import { Component, OnInit } from '@angular/core';
import API_KEY from "../api.key";
import {MovieModel} from "../../models/movie.model";
import {MovieService} from "../../services/movie.service";
import {MovieapiService} from "../../services/movieapi.service";
import {NzNotificationService} from "ng-zorro-antd";

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.less']
})
export class KidsComponent implements OnInit {
  movieData: MovieModel[];
  spinning = false;
  sorter = {
    asc: 'popularity.asc',
    desc: 'popularity.desc'
  };
  params: any = {
    page: 1,
    api_key: API_KEY,
    sort_by: this.sorter.asc,
    include_adult: false,
    include_video: false
  };

  constructor(private movies: MovieService, private favourite: MovieapiService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.listKids();
  }

  listKids(){
    this.spinning = true;
    this.movies.list({params:this.params}).subscribe((res: any) => {
      this.movieData = res.results;
      this.spinning = false;
    } , error => {console.log(error); this.spinning = false})
  }

  onSearch(event):void {
    console.log(event)
  }

  setFavourite($event: any) {
    const idMovie = parseInt($event);
    const isStarred = true;
    this.favourite.getStarredId(idMovie)
        .subscribe(res => {
          if(res.length > 0){
            this.notification.warning('Alert!', 'The current film was previously added to favourites');
          } else {
            this.favourite.postStarred({idMovie, isStarred})
                .subscribe(res => {
                  if(res){
                    this.notification.success('Success', 'The current film was added to favourites');
                  }
                }, error => console.log(error));
          }
        },
        error => {
            console.log(error)
        });
  }
}
