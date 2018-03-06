import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class DataService {
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
