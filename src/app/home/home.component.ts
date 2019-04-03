import {Component, OnInit} from '@angular/core';
import {ItemService} from '@app/shared/service/item.service';
import {Item} from '@app/shared/model/item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '@app/shared/service/category.service';
import {BrandService} from '@app/shared/service/brand.service';
import {MatDialog} from '@angular/material';
import {GalleryComponent} from '@app/home/gallery/gallery.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items: Item[];
  public filters: any[];
  public filterValues: any[];
  public filterForm = new FormGroup({});
  public selectSearch: boolean;

  constructor(private itemService: ItemService,
              private categoryService: CategoryService,
              private brandService: BrandService,
              public dialog: MatDialog,
              private fb: FormBuilder) {
    this.selectSearch = true;
    this.filterForm = this.fb.group({
      column: ['', Validators.required],
      search: [''],
    });
    this.items = [];
    this.filterValues = [];
    this.filters = [
      {
        name: 'CATEGORY'
      },
      {
        name: 'BRAND'
      },
      {
        name: 'PRICE'
      },
      {
        name: 'NAME'
      },
      {
        name: 'CAPACITY'
      }
    ];
  }

  ngOnInit() {
    this.getItems();
    this.filterForm.get('column').valueChanges.subscribe(uname => {
        if (['CATEGORY', 'BRAND'].find(value => value === uname)) {
          this.selectSearch = true;
          if (uname === 'CATEGORY') {
            this.categoryService.getEntities().subscribe(value => {
              this.filterValues = value;
            });
          }
          if (uname === 'BRAND') {
            this.brandService.getEntities().subscribe(value => {
              this.filterValues = value;
            });
          }
        } else {
          this.selectSearch = false;
          this.filterValues = [];
        }
      }
    );
  }

  onClickFilter() {
    if (this.filterForm.value.column) {
      this.itemService.getEntitiesFilter(this.filterForm.value.column, this.filterForm.value.search)
        .subscribe(value => {
          this.items = value;
        });
    } else {
      this.getItems();
    }
  }

  openGallery(item: Item) {
    const dialogRef = this.dialog.open(GalleryComponent, {
      width: '80%',
      data: item.imageGalleries
    });
  }

  cleanFilter() {
    this.getItems();
  }

  getItems() {
    this.itemService.getEntities().subscribe(response => {
      this.items = response;
    });
  }

}
