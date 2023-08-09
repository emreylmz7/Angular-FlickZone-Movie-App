import { NgModule } from "@angular/core";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { MovieCardComponent } from "../Shared/movie-card/movie-card.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CategoryListComponent } from "../Categories/category-list/category-list.component";
import { CategoriesModule } from "../Categories/categories.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { AdminGuard } from "../Authentication/Guards/admin.guard";
import { AuthenticationModule } from "../Authentication/Authentication.module";

const routes: Routes = [
    {
        path: "movies",
        children: [
            {path: 'addmovie',component: AddMovieComponent,canActivate:[AdminGuard]},
            {path: '',component: MovieListComponent},
            {path: ':movieId',component: MovieDetailComponent},
            {path: 'category/:categoryId',component: MovieListComponent},
        ]
    }
]

@NgModule({
    declarations: [
        MovieListComponent,
        MovieDetailComponent,
        AddMovieComponent,
        MovieCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CategoriesModule,
        CKEditorModule,
        AuthenticationModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        MovieListComponent,
        MovieDetailComponent,
        AddMovieComponent,
        MovieCardComponent,
    ] 
})
export class MoviesModule {

} 