import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '@app/shared/service/category.service';
import {Category} from '@app/shared/model/category';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoryForm = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<CategoryFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Category,
              private snackBar: MatSnackBar,
              private toastr: ToastrService,
              private categoryService: CategoryService, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: [this.data.name, Validators.required],
      cover: [this.data.cover],
      id: [this.data.id]
    });
  }

  ngOnInit() {
  }

  get name() {
    return this.categoryForm.get('name');
  }

  get cover() {
    return this.categoryForm.get('cover');
  }

  onClickSave(): void {
    if (this.categoryForm.value.id) {
      this.categoryService.updateEntity(this.categoryForm.value, this.categoryForm.value.id).subscribe(value => {
        this.dialogRef.close();
        this.toastr.success('Category message', 'The Category was updated!');
      });
    } else {
      this.categoryService.createEntity(this.categoryForm.value).subscribe(value => {
        this.dialogRef.close();
        this.toastr.success('Category message', 'The Category was created!');
      });
    }
  }
}
