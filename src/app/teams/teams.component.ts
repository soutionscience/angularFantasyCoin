import { Component, OnInit } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Generic[]
  players: Generic[]

  constructor(private apiService: ApiServiceService) { }

  ngOnInit (){
    this.getTeams()
    console.log("what is here? ", this.teams)
  }

  getTeams()  {
    this.apiService.getResource('teams').subscribe(resp=>{this.teams = resp;})
  }
  selectTeam(p){
  this.apiService.getTeams('players', p).subscribe(resp=>{console.log("haha ",resp); this.players = resp})
  }
}
