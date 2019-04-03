import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/material.module';
import {ItemRoutingModule} from '@app/item/item-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormUploadComponent} from '@app/item/form-upload/form-upload.component';

@NgModule({
  declarations: [ItemComponent, ItemFormComponent, FormUploadComponent],
  entryComponents: [ItemFormComponent, FormUploadComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ItemRoutingModule,
    ReactiveFormsModule
  ]
})
export class ItemModule { }
