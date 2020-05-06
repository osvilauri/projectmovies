import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TheatersComponent} from "./theaters.component";


const routes: Routes = [
    {
        path: '',
        component: TheatersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheatersRoutingModule { }
