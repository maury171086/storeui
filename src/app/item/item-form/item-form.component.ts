import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ItemService} from '@app/shared/service/item.service';
import {Item} from '@app/shared/model/item';
import {CategoryService} from '@app/shared/service/category.service';
import {BrandService} from '@app/shared/service/brand.service';
import {Category} from '@app/shared/model/category';
import {Brand} from '@app/shared/model/brand';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  categories: Category[];
  brands: Brand[];
  itemForm = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<ItemFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Item,
              private snackBar: MatSnackBar,
              private toastr: ToastrService,
              private itemService: ItemService,
              private categoryService: CategoryService,
              private brandService: BrandService,
              private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: [this.data.name, Validators.required],
      price: [this.data.price, Validators.required],
      importPrice: [this.data.importPrice, Validators.required],
      capacity: [this.data.capacity, Validators.required],
      description: [this.data.description],
      brandId: [this.data.brandId, Validators.required],
      categoryId: [this.data.categoryId, Validators.required],
      id: [this.data.id]
    });
    this.categories = [];
    this.brands = [];
  }

  ngOnInit() {
    this.categoryService.getEntities().subscribe((response) => {
      this.categories = response;
    });
    this.brandService.getEntities().subscribe(response => {
      this.brands = response;
    });
  }

  onClickSave(): void {
    if (this.itemForm.value.id) {
      this.itemService.updateEntity(this.itemForm.value, this.itemForm.value.id).subscribe(value => {
        this.dialogRef.close();
        this.toastr.success('Item message', 'The Item was updated!');
      });
    } else {
      this.itemService.createEntity(this.itemForm.value).subscribe(value => {
        this.dialogRef.close();
        this.toastr.success('Item message', 'The Item was created!');
      });
    }
  }

  get name() {
    return this.itemForm.get('name');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get importPrice() {
    return this.itemForm.get('importPrice');
  }

  get description() {
    return this.itemForm.get('description');
  }

  get capacity() {
    return this.itemForm.get('capacity');
  }

  get brand() {
    return this.itemForm.get('brand');
  }

  get category() {
    return this.itemForm.get('categoryy');
  }

}
