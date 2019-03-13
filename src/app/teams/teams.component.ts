import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiServiceService } from '../services/api-service.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  /// this component displays team and sends selected team to server
  allPlayers: String []
  specialPlayers: String[];
  SpecialKeepers: String [];
  SpecialMids: String[];
  SpecialDefs: String[];
  SpecialAttacks: String[];
  goalKeepers: String[];
  defenders: String [];
  mids: String[];
  attackers: String [];
  teams: String [];
  constructor(private apiService: ApiServiceService, private web3Service: Web3Service, private ref: ChangeDetectorRef) { }
  ngOnInit (){
    this.getAllPlayers()
    this.getTeams();

  }
  getAllPlayers(){
    this.apiService.getResource('players')
    .subscribe(resp=>{
      this.allPlayers = resp;
      console.log('all players ', this.allPlayers)
      this.filterBYPosition(this.allPlayers)

    })
  }
  getTeams(){
    this.apiService.getResource('teams')
    .subscribe(resp=> this.teams =resp)
  }
  //filter
  filterBYPosition(l){
    this.goalKeepers = this.filterList(l, 1);
    console.log('goalkeepers ', this.goalKeepers)
  }
  //filter by position
  filterList(list, id){
  let myElement =[];
    list.forEach(element => {
    if(element.position == id){
      myElement.push(element);
    }
  });
  return myElement
  }
}
