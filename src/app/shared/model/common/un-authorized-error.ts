import {AppError} from '@app/shared/model/common/app-error';

export class UnAuthorizedError extends AppError {
  constructor(error?: any, resourceName?: string) {
    super(error, resourceName);

    this.description = `You are not authorised to access this ${resourceName}.`;
    this.errorNumber = 401;
  }
}
