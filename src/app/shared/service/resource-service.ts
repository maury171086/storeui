import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BadRequestError} from '@app/shared/model/common/bad-request-error';
import {NotFoundError} from '@app/shared/model/common/not-found-error';
import {UnAuthorizedError} from '@app/shared/model/common/un-authorized-error';
import {UnknownError} from '@app/shared/model/common/un-known-error';

export class ResourceService<T> {

  resourceName: string;
  constructor(
    protected httpClient: HttpClient,
    protected url: string) {
  }

  getEntities(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url);
  }

  getEntityById(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}${id}`);
  }

  createEntity(entity: T): Observable<T> {
    return this.httpClient.post<T>(this.url, entity);
  }

  updateEntity(entity: T, id: number): Observable<T> {
    return this.httpClient.put<T>(`${this.url}${id}`, entity);
  }

  deleteEntity(id: number): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}${id}`);
  }
  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error, this.resourceName));
    }
    if (error.status === 401) {
      return Observable.throw(new UnAuthorizedError(error, this.resourceName));
    }
    if (error.status === 400) {
      return Observable.throw(new BadRequestError(error, this.resourceName));
    }
    return Observable.throw(new UnknownError(error));
  }
}
