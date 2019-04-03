import {Injectable} from '@angular/core';
import {ResourceService} from '@app/shared/service/resource-service';
import {Item} from '@app/shared/model/item';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gallery} from '@app/shared/model/gallery';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends ResourceService<Item> {

  resource = 'items/';

  constructor(httpClient: HttpClient) {
    super(httpClient, 'items/');
  }

  getEntitiesFilter(column: string, search: string): Observable<Item[]> {
    return this.httpClient.get<any[]>(`${this.url}?column=${column}&search=${search}`);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'items/images/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  createGallery(gallery: Gallery): Observable<Gallery> {
    return this.httpClient.post<Gallery>('items/images', gallery);
  }
}
