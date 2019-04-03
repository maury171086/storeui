import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { BrandModule } from './brand/brand.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CategoryModule} from '@app/category/category.module';
import {ItemModule} from '@app/item/item.module';
import {NgxImageGalleryModule} from 'ngx-image-gallery';
import {HomeModule} from '@app/home/home.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    BrandModule,
    CategoryModule,
    ItemModule,
    ReactiveFormsModule,
    NgxImageGalleryModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
