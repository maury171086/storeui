import {Component, OnInit} from '@angular/core';
import {BrandService} from '@app/shared/service/brand.service';
import {Brand} from '@app/shared/model/brand';
import {BrandFormComponent} from '@app/brand/brand-form/brand-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  public brandColumns: string[] = ['id', 'name', 'options'];
  public brands: Brand[];
  public brand: Brand;

  constructor(private brandService: BrandService,
              public dialog: MatDialog) {
    this.brands = [];
    this.brand = new Brand();
  }

  ngOnInit() {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getEntities().subscribe(response => {
      this.brands = response;
    });
  }

  openCreateBrandForm() {
    const dialogRef = this.dialog.open(BrandFormComponent, {
      width: '40%',
      data: this.brand
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBrands();
    });
  }

  openUpdateBrandForm(brand: Brand) {
    const dialogRef = this.dialog.open(BrandFormComponent, {
      width: '40%',
      data: brand
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBrands();
    });
  }

}
