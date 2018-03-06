import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { RESERVES } from "./RESERVES";

@Injectable()
export class DataService {
  public newReserveSubject = new Subject<any>();
  constructor(private http: Http) {}

  // Http request to retrieve starters
  getAllStarters() {
    return this.http.get("../assets/js/starters.json").map(res => res.json());
  }

  // Http request to retrieve reserves
  getAllReserves() {
    return this.http.get("../assets/js/reserves.json").map(res => res.json());
  }
 
}
