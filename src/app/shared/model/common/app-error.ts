export abstract class AppError {
  description: string;
  errorNumber: number;
  constructor(error?: any, resourceName?: string) {
  }
}
