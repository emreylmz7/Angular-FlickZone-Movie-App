import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../Categories/category.service';
import { Category } from '../../Categories/category.model';
import { NgForm } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MovieService,CategoryService]
})
export class AddMovieComponent implements OnInit {
  
  public Editor = ClassicEditor;
  categories : Category[] = [];
  error:string = "";
  model:any = {
    categoryId: "0"
  };

  constructor(private movieService:MovieService,private categoryService: CategoryService,private router: Router){}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;  
    });
  }

  addMovie(form: NgForm){

    const extensions = ["jpeg","jpg","png"];
    const extension = this.model.imageUrl.split(".").pop();

    if (extensions.indexOf(extension) == -1) {
      this.error = "Image extension must be jpeg or png only";
      return;
    }

    if (this.model.categoryId == "0") {
      this.error = "You must be select Category";
      return;      
    }

    const movie =  {
      id:1,
      name: this.model.name,
      Imdb: this.model.Imdb,
      year: this.model.year,
      imageUrl: this.model.imageUrl,
      description: this.model.description,
      isActive: this.model.isActive,
      inList: this.model.inList,
      categoryId: this.model.categoryId 
    }
    
    if (form.valid) {
      this.movieService.AddMovie(movie).subscribe(data => {
        this.router.navigate(['/movies']);
      });
    }
    else{
      this.error = "Check Your Form"
    }
    
    console.log(this.model)
  }

}
