import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {

  handleError(error: any) {
    console.log(error, 'Custom Error handler');
  }
}
