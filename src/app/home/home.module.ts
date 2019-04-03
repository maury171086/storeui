import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeRoutingModule} from '@app/home/home-routing.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [HomeComponent, GalleryComponent],
  entryComponents: [GalleryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
