import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { PLAYERS } from "./players";
import 'rxjs/add/observable/of';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


import { RESERVES } from './RESERVES';

@Injectable()
export class DataService {

public newReserveSubject = new Subject<any>();
constructor(private http:Http) {}

getAllStarters() {

  return this.http.get('../assets/js/starters.json').map(res => res.json())

} 

getAllReserves() {

  return this.http.get('../assets/js/reserves.json').map(res => res.json())

}

moveToBench(data) {

  this.newReserveSubject.next(data)

}


}
