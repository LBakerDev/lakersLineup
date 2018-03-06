import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';


@Component({
  selector: "app-roster-box",
  templateUrl: "./roster-box.component.html",
  styleUrls: ["./roster-box.component.css"],
  
})
export class RosterBoxComponent implements OnInit {
  btnTextStarter: string = "Move to Bench";
  btnTextReserve: string = "Make Starter";
  players: Array<any>
  reserves: Array<any>;

  

constructor(public dataService: DataService) {}
ngOnInit() {
  //Http request to retrieve data
     this.dataService.getAllStarters()
     .subscribe(
       data => this.players = data
     )
     this.dataService.getAllReserves()
     .subscribe(
       data => this.reserves = data
     )
  }

  onStarterSubmit(i): void {
    let playerToMove = this.players[i]
    this.players[i].moves--

    this.players.splice(i, 1);
    console.log(playerToMove);
    this.reserves.push(playerToMove);
    console.log(this.reserves)
  
  }

  onReserveSubmit(i): void {
    let playerToMove = this.reserves[i]
    this.reserves[i].moves--

    this.reserves.splice(i, 1);
    console.log(playerToMove);
    this.players.push(playerToMove);
    console.log(this.players)
  
  }
    
   
 
}

  

