import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "albums/:user_id",
    component: AlbumsComponent,
  },
  {
    path: "photos/:album_id",
    component: PhotosComponent,
  },
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "users",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
