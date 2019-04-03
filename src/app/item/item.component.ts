import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Item} from '@app/shared/model/item';
import {ItemService} from '@app/shared/service/item.service';
import {ItemFormComponent} from '@app/item/item-form/item-form.component';
import {Brand} from '@app/shared/model/brand';
import {Category} from '@app/shared/model/category';
import {Validators} from '@angular/forms';
import {FormUploadComponent} from '@app/item/form-upload/form-upload.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public itemColumns: string[] = ['name', 'category', 'brand', 'price', 'importPrice', 'capacity', 'description', 'options'];
  public items: Item[];
  public item: Item;

  constructor(private itemService: ItemService,
              private toastr: ToastrService,
              public dialog: MatDialog) {
    this.items = [];
    this.item = new Item();
    this.item.brand = new Brand();
    this.item.category = new Category();
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getEntities().subscribe(response => {
      this.items = response;
    });
  }

  openCreateItemForm() {
    const dialogRef = this.dialog.open(ItemFormComponent, {
      width: '40%',
      data: this.item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getItems();
    });
  }

  opeAddImageItemForm(item: Item) {
    const dialogRef = this.dialog.open(FormUploadComponent, {
      width: '40%',
      data: {
        id: item.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getItems();
    });
  }

  openUpdateItemForm(item: Item) {
    const dialogRef = this.dialog.open(ItemFormComponent, {
      width: '40%',
      data: {
        name: item.name,
        price: item.price,
        importPrice: item.importPrice,
        description: item.description,
        brandId: item.brand.id,
        categoryId: item.category.id,
        id: item.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getItems();
    });
  }

  openDeleteItemForm(item: Item) {
    this.itemService.deleteEntity(item.id).subscribe(value => {
      this.toastr.success('The Item message', 'The Item was deleted!');
      this.getItems();
    });
  }

}
