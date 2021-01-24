import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
/**
 * Adds a default error handler to all requests.
 */

export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.handleError(error)));
  }
  private handleError(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    console.log(`Error while fetching projects: ${response}`);
    throw response;
  }
}
