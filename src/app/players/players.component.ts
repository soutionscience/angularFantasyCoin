import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Output() myEvent = new EventEmitter();

  @Input() players: Generic[]
  teamPlayers: Generic[];
  balance: number;
  selectedPlayers: Generic [];
  selectedClass: Boolean;
  GoalKeepers: Generic [];
  allPlayers: Generic []


  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.selectedClass = false;
    this.balance = 100;
    this.teamPlayers =[];
    this.getKeepers();

  }
  // add players to team and emit
  choosePlayer(p) {
    if (this.teamPlayers.length < 11) {

      //check if player selected is already in team players
      if (this.teamPlayers.indexOf(p) == -1) {
        //player does not exit ..add player
        this.teamPlayers.push(p)

      } else {
        //player exits remove from teamPLayers
        let index = this.teamPlayers.indexOf(p);
        this.teamPlayers.splice(index)
      }
      this.myEvent.emit(this.teamPlayers);

    }



  }

  checkIfSelected(p) {// for css
    if (this.teamPlayers.indexOf(p) == -1) {
      return false

    } else { return true}


  }
  getKeepers(){
    this.allPlayers = this.players
    console.log('are we getting players ', this.allPlayers)
    this.GoalKeepers = this.filterList(this.players, 1)

  }
filterList(list, id){
    console.log('called filted list')
    let myElement;
    list.forEach(element => {
if(element.position == id){
  console.log('the fuck is this? ', element)
  myElement= element;
  console.log('my Element ', myElement)
}
});
 return myElement
  }
}
