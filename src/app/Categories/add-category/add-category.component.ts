import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,private router: Router) {}

  ngOnInit(): void {}

  addCategory(name:any){
    this.categoryService.createCategory({ id:0 ,name: name.value}).subscribe(data => {
      this.router.navigate(["/movies"]);
    })
  }

}
