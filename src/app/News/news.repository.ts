import { New } from "./news.model";

export class NewsRepository {
    private news : New[] = [
        {id:1,name:"Henry Cavill",imageUrl:"hotnews1.jpg",description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sequi.",date: new Date(2023, 7, 10)},
        {id:2,name:"Henry Cavill",imageUrl:"hotnews2.jpg",description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sequi.",date: new Date(2023, 6, 10)},
        {id:3,name:"Henry Cavill",imageUrl:"hotnews3.jpeg",description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sequi.",date: new Date(2023, 5, 10)},
        {id:4,name:"Henry Cavill",imageUrl:"hotnews4.jpeg",description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sequi.",date: new Date(2023, 4, 10)},
        {id:5,name:"Henry Cavill",imageUrl:"hotnews5.jpg",description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sequi.",date: new Date(2023, 3, 10)},
    ];

    getNews(){
        return this.news.filter(p=>p.name);;
    }
    getNewsById(id :number): New | undefined{
        return this.news.find(p=>p.id == id);
    }
}