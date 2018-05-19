import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SharedService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedService {

    data:any;
    id: number;

  constructor(public http: HttpClient) {

  }

    getItems(){
        return this.http.get("https://jsonplaceholder.typicode.com/photos")
            .map(response => response)

    }

}
