import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import {MovieapiService} from "../services/movieapi.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-root',
  template: ` 
    <nz-spin [nzSpinning]="spinning" style="min-height: 190px;">
      <router-outlet></router-outlet>
    </nz-spin>`,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'projectmovies';
  spinning = false;

  get isMobile() {
    return this.size && this.size < 768;
  }
  size = null;
  @HostListener('window:resize')
  onWindowResize() {
    this.size = document.querySelector('body').offsetWidth;
  }
  constructor(private router: Router){}
    ngOnInit() {}

    ngAfterViewInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.spinning = true;
            } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
                this.spinning = false;
            }
        });
    }

}
