import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import { Response } from 'express';
import ValidationError = Error;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost): any {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse<Response>();

    return response.status(400).json({
      statusCode: 400,
      createdBy: 'ValidationErrorFilter',
      errors: exception,
    });
  }
}
