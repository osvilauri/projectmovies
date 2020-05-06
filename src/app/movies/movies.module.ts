import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesComponent} from "./movies.component";
import {MoviesRoutingModule} from "./movies-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NzEmptyModule, NzGridModule, NzSpinModule} from "ng-zorro-antd";



@NgModule({
  declarations: [ MoviesComponent],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        SharedModule,
        NzGridModule,
        NzEmptyModule,
        NzSpinModule
    ]
})
export class MoviesModule { }
