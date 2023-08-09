import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute,private movieService: MovieService) {
    
  }   

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading = true;
      this.movieService.getMovies(params["categoryId"]).subscribe(data=> {
        this.movies = data;
        this.loading = false;
      })
    });
  }  
}
