import { Category } from "./category.model";

export class CategoryRepository {
    private categories : Category[] = [
        {id:1,name:"Love"},
        {id:2,name:"Comedy"},
        {id:3,name:"Action"}
    ];

    getMovies(){
        return this.categories;
    }
    getMovieById(id :number): Category | undefined{
        return this.categories.find(p=>p.id = id);
    }  
}