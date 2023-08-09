import { Movie } from "./movie.model";

export class MovieRepository {
    private movies : Movie[] = [
        {id:1,name:"Batman",Imdb: 9.3 ,year : 2008,imageUrl:"1.jpg",description:"Güzel film",isActive: true,inList:false,categoryId:1},
        {id:2,name:"Superman",Imdb:8.3,year : 2015,imageUrl:"2.jpg",description:"Aksiyonlu film",isActive: true,inList:true,categoryId:2},
        {id:3,name:"Deadpool",Imdb: 7.5,year: 2019,imageUrl:"3.jpg",description:"Komik film",isActive: true,inList:true,categoryId:1},
        {id:4,name:"X-Men",Imdb: 7.5,year: 2019,imageUrl:"4.jpg",description:"Komik film",isActive: true,inList:true,categoryId:2},
        {id:5,name:"Spiderman",Imdb: 7.5,year: 2019,imageUrl:"5.jpg",description:"Spider-Man centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface.",isActive: true,inList:true,categoryId:1},
        {id:6,name:"Aquaman",Imdb: 7.5,year: 2019,imageUrl:"6.jpg",description:"Komik film",isActive: true,inList:true,categoryId:3},
        {id:7,name:"Antman",Imdb: 7.5,year: 2019,imageUrl:"7.jpg",description:"Komik film",isActive: true,inList:true,categoryId:3}   
    ];

    getMovies(){
        return this.movies.filter(p=>p.isActive);
    }
    getWatchList(){
        return this.movies.filter(p=>p.inList);
    }
    getMovieById(id :number): Movie | undefined{
        return this.movies.find(p=>p.id == id);
    }
    getMoviesByCategoryId(id:number): Movie[] {
        return this.movies.filter(p=>p.categoryId == id);
    }  
}