import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavouritesComponent} from "./favourites.component";
import {FavouritesRoutingModule} from "./favourites-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NzEmptyModule, NzGridModule, NzSpinModule} from "ng-zorro-antd";




@NgModule({
  declarations: [FavouritesComponent],
    imports: [
        CommonModule,
        FavouritesRoutingModule,
        SharedModule,
        NzGridModule,
        NzEmptyModule,
        NzSpinModule
    ]
})
export class FavouritesModule { }
