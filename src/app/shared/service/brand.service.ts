import { Injectable } from '@angular/core';
import {ResourceService} from '@app/shared/service/resource-service';
import {HttpClient} from '@angular/common/http';
import {Brand} from '@app/shared/model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends ResourceService<Brand> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'brands/');
  }
}
