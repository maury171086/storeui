import { Component, OnInit } from '@angular/core';
import {CategoryService} from '@app/shared/service/category.service';
import {Category} from '@app/shared/model/category';
import {MatDialog} from '@angular/material';
import {CategoryFormComponent} from '@app/category/category-form/category-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categoryColumns: string[] = ['id', 'name', 'options'];
  public categories: Category[];
  public category: Category;
  constructor(private categoryService: CategoryService,
              public dialog: MatDialog) {
    this.category = new Category();
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getEntities().subscribe(response => {
      this.categories = response;
    });
  }
  openCreateCategoryForm() {
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '40%',
      data: this.category
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategories();
    });
  }
  openUpdateCategoryForm(category: Category) {
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '40%',
      data: category
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategories();
    });
  }

}
