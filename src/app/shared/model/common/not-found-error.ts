import {AppError} from '@app/shared/model/common/app-error';

export class NotFoundError extends AppError {
  constructor(error?: any, resourceName?: string) {
    super(error, resourceName);

    this.description = `The ${resourceName} you are looking at is already deleted...`;
    this.errorNumber = 404;
  }
}
