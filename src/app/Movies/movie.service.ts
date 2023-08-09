import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";
import { Observable, Subject, delay, exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../Authentication/auth.service";
import { environment } from "src/environments/environment";

//Local Service

@Injectable()
export class MovieService {
    private url = environment.Url;
 
    constructor(private http: HttpClient,private authService: AuthService) {}

    getMovies(categoryId:number): Observable<Movie[]> {
        return this.http
            .get<Movie[]>(this.url + "movies.json")
            .pipe(
                map(data => {
                    const movies: Movie[] = [];

                    for(const key in data){
                        if (categoryId) {
                            if (categoryId == data[key].categoryId) {
                                movies.push({ ...data[key],id:key});
                            }
                        }
                        else{
                            movies.push({ ...data[key],id:key});
                        }
                    }
                    return movies;
                }),
                delay(1000)
            );
    }
    getWatchList(): Observable<Movie[]> {
        return this.http
            .get<Movie[]>(this.url + "movies.json")
            .pipe(
                map(data => {
                    const movies: Movie[] = [];
                    for(const key in data){
                        if (data[key].inList) {
                            movies.push({ ...data[key],id:key});
                        }
                    }
                    return movies;
                }),
                delay(1000)
            );
    }
    getMovieById(id: string): Observable<Movie>{
        return this.http.get<Movie>(this.url + "movies/" + id + ".json").pipe(delay(1000))
    }
    AddMovie(movie:Movie):Observable<Movie>{
        return this.authService.user.pipe(
            take(1),
            tap(user => console.log(user)),
            exhaustMap(user => {
                return this.http.post<Movie>(this.url + "movies.json?auth=" + user?.token,movie)
            })
        )
    }
    updateMovie(id:string){
    
    } 
 
}