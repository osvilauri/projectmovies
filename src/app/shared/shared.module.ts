import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NzButtonComponent,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzInputModule, NzModalModule, NzNotificationModule, NzNotificationService, NzNotificationServiceModule,
    NzTagModule
} from "ng-zorro-antd";
import {SearchComponent} from "./search/search.component";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "./card/card.component";
import {RouterModule} from "@angular/router";
import {DetailsComponent} from "./details/details.component";


@NgModule({
    declarations: [SearchComponent, CardComponent, DetailsComponent],
    exports: [
        SearchComponent,
        CardComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        NzCardModule,
        NzIconModule,
        NzInputModule,
        NzTagModule,
        NzGridModule,
        NzButtonModule,
        FormsModule,
        RouterModule,
        NzModalModule,
        NzNotificationModule,
        NzNotificationServiceModule

    ]
})
export class SharedModule { }
