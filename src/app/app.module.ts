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
  NzMenuModule
} from "ng-zorro-antd";
import {MovieapiService} from "../services/movieapi.service";
import {ExternalapiService} from "../services/externalapi.service";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, MovieapiService,ExternalapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
