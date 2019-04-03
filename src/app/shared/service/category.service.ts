import { Injectable } from '@angular/core';
import {ResourceService} from '@app/shared/service/resource-service';
import {Category} from '@app/shared/model/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ResourceService<Category> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'categories/');
  }
}
