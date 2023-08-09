import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Movies/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../Movies/movie.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
  providers: [MovieService]
})
export class WatchListComponent implements OnInit {

  loading: boolean = false;
  movies: Movie[];

  constructor(private route: ActivatedRoute,private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading=true;
      this.movieService.getWatchList().subscribe(data=> {
        this.movies = data;
        this.loading = false;
      })
    });
  }
}
