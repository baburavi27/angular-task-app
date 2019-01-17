import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * common data wrapper service for all get and post methods
 */

@Injectable()
export class DataWrapperService {
    constructor(private http: Http) { }
    getData(requestURL) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return this.http.get(requestURL, options)
            .map((res: Response) => <Array<any>>res.json());
    }
    pushData(requestURL, data) {
        let body = JSON.stringify(data);
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return this.http.post(requestURL, body, options)
            .map((res: Response) => <Array<any>>res.json());
    }
}
