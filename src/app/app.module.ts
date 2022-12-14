import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    MoviePageComponent,
    AddMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
