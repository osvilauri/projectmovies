import { Component, OnInit } from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {TrendingService} from "../../services/trending.service";
import API_KEY  from "../api.key";
import {MovieapiService} from "../../services/movieapi.service";
import {NzNotificationService} from "ng-zorro-antd";
import {SearchService} from "../../services/search.service";


@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.less']
})
export class TheatersComponent implements OnInit {
  movieData: MovieModel[];
  spinning = false;
  page = 1;
  sorter = {
    asc: 'popularity.asc',
    desc: 'popularity.desc'
  };

  constructor(
      private trending: TrendingService,
      private favourite: MovieapiService,
      private notification: NzNotificationService,
      private search: SearchService
  ) { }

  ngOnInit(): void {
    this.listTrending();
  }

  listTrending(){
    this.spinning = true;
    const params: any = {
      api_key: API_KEY,
      page: this.page,
      sort_by: this.sorter.asc,
      include_video: false
    };
    this.trending.list({ params }).subscribe((res: any) => {
      this.movieData = res.results;
      this.spinning = false;
    } , error => {console.log(error); this.spinning = false})
  }

  onSearch(event) {
    this.spinning = true;
    const params: any = {
      page: this.page,
      api_key: API_KEY,
      sort_by: this.sorter.asc,
      include_video: false,
      query: event
    };
    if(!params.query){
      this.listTrending()
    } else {
      this.search.list({params}).subscribe((res: any) => {
        this.movieData = res.results;
        this.spinning = false;
      } , error =>{ console.log(error); this.spinning = false;})
    }
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
