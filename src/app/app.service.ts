import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DataWrapperService } from './shared/datawrapper-service';

@Injectable()
export class AppService {

    constructor(private dataWrapper: DataWrapperService) { }

    getPosts() {
        return this.dataWrapper.getData(`${environment.REST_API_URL}posts`);
    }

   

}
