import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './home/albums/albums.component';
import { ApiService } from './api.service';
import { PhotosComponent } from './home/albums/photos/photos.component';

const appRoutes: Routes=[
  { path: 'home', component: HomeComponent },
  { path:'home/photos/:id', component:PhotosComponent},
  {path: '', redirectTo: 'home',pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
