import { NgModule } from "@angular/core";
import { HomeComponent } from "./Home/home.component";
import { WatchListComponent } from "./Watch-list/watch-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthenticationModule } from "../Authentication/Authentication.module";
import { MoviesModule } from "../Movies/movies.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        WatchListComponent,
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthenticationModule,
        MoviesModule
    ],
    exports: [
        NavbarComponent,
        HomeComponent,
        WatchListComponent,
    ]
})
export class SharedModule{

}