import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>,
         next: HttpHandler
         ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders : {
                'x-rapidapi-key': '67172eb187msh6ec5724d1a22f13p1093e8jsnc8354d20972b',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams:{
                'key':'c916236cd0ce474a81e1f4ff4d41ca45',
            }
        });
        return next.handle(req);
    }
    
}