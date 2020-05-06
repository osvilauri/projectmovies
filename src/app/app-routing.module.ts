import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./theaters/theaters.module').then((mod=>mod.TheatersModule))
  },
  {
    path: 'movies',
    component: LayoutComponent,
    loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    path: 'kids',
    component: LayoutComponent,
    loadChildren: () => import('./kids/kids.module').then(mod => mod.KidsModule)
  },
  {
    path: 'favourites',
    component: LayoutComponent,
    loadChildren: () => import('./favourites/favourites.module').then(mod => mod.FavouritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
