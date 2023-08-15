import { Component } from '@angular/core';
import { Movie } from '../../Movies/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../Movies/movie.service';
import { New } from 'src/app/News/news.model';
import { NewsRepository } from 'src/app/News/news.repository';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent {

  movies: Movie[];
  news: New[];
  loading:boolean = false;

  constructor(private route: ActivatedRoute,private movieService: MovieService,private newsRepository:NewsRepository) {}   

  ngOnInit(): void {
    this.news = this.newsRepository.getNews();
    
    this.route.params.subscribe(params => {
      this.loading = true;
      this.movieService.getMovies(params["categoryId"]).subscribe(data=> {
        this.movies = data;
        this.loading = false;
      })
    });
  }

}
