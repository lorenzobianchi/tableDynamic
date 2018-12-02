import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { tap, pipe, catch, throw } from 'rxjs/operators';

@Injectable()
export class MyLogHttpInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    console.log('processing request', request);

    const customReq = request.clone({
      headers: request.headers.set('app-language', 'it')
    })

    return next.handle(customReq)
      .pipe(tap(
        (ev: HttpEvent<any>) => {
          if(ev instanceof HttpResponse) {
            console.log('processing response', ev);
          }
        return ev;
      },
      error => console.log(error)
    ))
  }

}
