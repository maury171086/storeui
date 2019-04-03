import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import {NgxImageGalleryModule} from 'ngx-image-gallery';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    NgxImageGalleryModule,
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
