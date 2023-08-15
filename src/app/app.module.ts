import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesModule } from './Categories/categories.module';
import { AuthenticationModule } from './Authentication/Authentication.module';
import { SharedModule } from './Shared/shared.module';
import { MoviesModule } from './Movies/movies.module';
import { NewsRepository } from './News/news.repository';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CategoriesModule,
    MoviesModule,
    AuthenticationModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [NewsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
