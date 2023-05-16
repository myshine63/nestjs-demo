import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import * as dayjs from 'dayjs';
@Catch(HttpException)
export default class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const req = context.getRequest<Request>();
    const res = context.getResponse<Response>();
    const statusCode = exception.getStatus();
    res.status(statusCode).json({
      message: exception.message,
      time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      url: req.url,
    });
  }
}
