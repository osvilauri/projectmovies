import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KidsComponent} from "./kids.component";
import {KidsRoutingModule} from "./kids-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NzEmptyModule, NzGridModule, NzNotificationServiceModule, NzSpinModule} from "ng-zorro-antd";




@NgModule({
  declarations: [KidsComponent],
    imports: [
        CommonModule,
        KidsRoutingModule,
        SharedModule,
        NzGridModule,
        NzNotificationServiceModule,
        NzEmptyModule,
        NzSpinModule
    ]
})
export class KidsModule { }
