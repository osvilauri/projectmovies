import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {
  NzBreadCrumbModule,
  NzGridModule,
  NzLayoutModule,
  NzMenuModule, NzSpinModule
} from "ng-zorro-antd";
import {MovieapiService} from "../services/movieapi.service";
import {LayoutModule} from "./layout/layout.module";
import {MoviesModule} from "./movies/movies.module";
import {TheatersModule} from "./theaters/theaters.module";
import {SharedModule} from "./shared/shared.module";
import {TrendingService} from "../services/trending.service";
import {SearchService} from "../services/search.service";
import {MovieService} from "../services/movie.service";



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSpinModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MoviesModule,
    TheatersModule,
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, MovieapiService,TrendingService,MovieService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
