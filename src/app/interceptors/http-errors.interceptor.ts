import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { catchError, observable, Observable, throwError } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor{
    constructor() {}
    intercept
    (req: HttpRequest<any>,
         next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
                console.log(err);
                return throwError(err);
            })
        );
    }
    
}