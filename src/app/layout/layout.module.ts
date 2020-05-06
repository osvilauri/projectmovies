import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout";
import {
    NzBreadCrumbModule, NzButtonModule,
    NzDrawerModule,
    NzGridModule,
    NzIconModule, NzInputModule,
    NzLayoutModule,
    NzMenuModule, NzModalModule, NzSelectModule, NzTagModule
} from "ng-zorro-antd";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MoviesModule} from "../movies/movies.module";
import {LayoutRoutingModule} from "./layout-routing.module";
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/menu.reducers';



@NgModule({
  declarations: [ LayoutComponent],
    imports: [
        BrowserModule,
        NzLayoutModule,
        NzGridModule,
        NzBreadCrumbModule,
        NzMenuModule,
        NzDrawerModule,
        NzIconModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LayoutRoutingModule,
        NzModalModule,
        StoreModule.forRoot({
            menu: reducer
        }),
        NzTagModule,
        NzSelectModule,
        NzInputModule,
        NzButtonModule
    ]
})
export class LayoutModule { }
