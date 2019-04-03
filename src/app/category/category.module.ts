import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/material.module';
import {CategoryRoutingModule} from '@app/category/category-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CategoryComponent, CategoryFormComponent],
  entryComponents: [CategoryFormComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
