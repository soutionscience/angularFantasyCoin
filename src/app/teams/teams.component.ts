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

  teamPlayers: String [];

  constructor(private apiService: ApiServiceService,
    private web3Service: Web3Service, private ref: ChangeDetectorRef) { }
  ngOnInit (){
    this.getAllPlayers()
    this.getTeams();
    this.teamPlayers =[];

  }
  getAllPlayers(){ // and filter by position and rank
    this.apiService.getResource('players')
    .subscribe(resp=>{
      this.allPlayers = resp;
      console.log('all players ', this.allPlayers)
      this.filterBYPosition(this.allPlayers)

    })
  }
  selectTeam(t){
    console.log('what is in t? ', t)
    this.apiService.getTeams('players', t).subscribe(resp=>{
      this.allPlayers = resp;
      this.filterByTeam(this.allPlayers)
       this.ref.detectChanges();
    })


  }
  getTeams(){
    this.apiService.getResource('teams')
    .subscribe(resp=> this.teams =resp)
  }
  //filter by position sort and assing to special
  filterBYPosition(l){
    this.goalKeepers = this.filterList(l, 1);
    this.defenders = this.filterList(l, 2)
    this.mids = this.filterList(l, 3)
    this.attackers = this.filterList(l, 4)


    this.goalKeepers = this.pointsTotalSort(this.goalKeepers);
    this.defenders = this.pointsTotalSort(this.defenders)
    this.mids = this.pointsTotalSort(this.mids)
    this.attackers = this.pointsTotalSort(this.attackers)


    this.SpecialKeepers = this.goalKeepers.slice(0,3)
    this.SpecialDefs = this.defenders.slice(0,6)
    this.SpecialMids = this.mids.slice(0, 6)
    this.SpecialAttacks = this.attackers.slice(0, 6)

  }

  filterByTeam(l){
    this.goalKeepers = this.filterList(l, 1);
    this.defenders = this.filterList(l, 2)
    this.mids = this.filterList(l, 3)
    this.attackers = this.filterList(l, 4)


    this.SpecialKeepers = this.pointsTotalSort(this.goalKeepers);
    this.SpecialDefs  = this.pointsTotalSort(this.defenders)
    this.SpecialMids  = this.pointsTotalSort(this.mids)
    this.SpecialAttacks= this.pointsTotalSort(this.attackers)

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

  //sort with pointsTotal
  pointsTotalSort(list){
 return list.sort((a,b)=>{return b.pointsTotal-a.pointsTotal})

  }
  selectPlayer(g){// select players to add to team
   if(this.teamPlayers.length>= 11){
     console.log('team already full')

   }else{
    if(this.teamPlayers.indexOf(g)> -1){
      console.log('already in team')


    }else{
      this.teamPlayers.push(g);
    }

  }



  }
}
