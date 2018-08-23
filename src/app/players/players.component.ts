import { Component, OnInit, Input } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() players: Generic[]
  teamPlayers: Generic[];
  balance: number;
  //selectedPlayers: [];


  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.balance = 100;
    this.teamPlayers =[];
  }

  choosePlayer(p){

this.balance = this.balance - p.now_cost/10
this.teamPlayers.push(p);
console.log(this.teamPlayers)


  }


}
