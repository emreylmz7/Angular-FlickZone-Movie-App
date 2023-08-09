import { NgModule } from "@angular/core";
import { CategoryListComponent } from "./category-list/category-list.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AdminGuard } from "../Authentication/Guards/admin.guard";
import { AuthenticationModule } from "../Authentication/Authentication.module";

@NgModule({
    declarations: [
        CategoryListComponent,
        AddCategoryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AuthenticationModule,
        RouterModule.forChild([
            {path: 'categories/add',component: AddCategoryComponent,canActivate:[AdminGuard]},
        ])
    ],
    exports: [
        CategoryListComponent,
        AddCategoryComponent
    ]
})
export class CategoriesModule {

}