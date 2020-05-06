import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TheatersRoutingModule} from "./theaters-routing.module";
import {TheatersComponent} from "./theaters.component";
import {SharedModule} from "../shared/shared.module";
import {NzEmptyModule, NzGridModule, NzSpinModule} from "ng-zorro-antd";



@NgModule({
  declarations: [TheatersComponent],
    imports: [
        CommonModule,
        TheatersRoutingModule,
        SharedModule,
        NzGridModule,
        NzEmptyModule,
        NzSpinModule
    ]
})
export class TheatersModule { }
