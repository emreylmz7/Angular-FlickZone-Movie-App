import { Component, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined;
  loading: boolean = false;
  
  constructor(private route: ActivatedRoute,private movieService:MovieService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["movieId"];
      this.loading = true;
      this.movieService.getMovieById(id).subscribe(result => {
        this.movie = {...result, id: id}
        this.loading = false;
      })
    })
  }
}
