import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/Movies/movie.model';
import { MovieService } from 'src/app/Movies/movie.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  providers: [MovieService]
})
export class MovieCardComponent implements OnInit {

  @Input() movieContent: Movie[] = [];
  @Input() movieButton: string[] = ["warning","plus","Add List"];
  movie: Movie;

  constructor(private movieService: MovieService){}

  ngOnInit(): void {}

  public addWatchList(id:string) {
    this.movieService.updateMovie(id);
  }
}
