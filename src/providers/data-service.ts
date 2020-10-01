import {Injectable} from '@angular/core';

import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the DataService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Hello DataService Provider');
  }
  getData(path) {
    return this.http.get(path).map((res: Response) => res.json());
  }

}
