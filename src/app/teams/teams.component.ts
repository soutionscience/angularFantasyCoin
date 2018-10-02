import { Component, OnInit } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiServiceService } from '../services/api-service.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Generic[]
  players: Generic[]
  accounts: String [];
  balance: String;
  teamPlayers: any [];

  constructor(private apiService: ApiServiceService, private web3Service: Web3Service) { }

  ngOnInit (){
    this.getTeams();
    this.getAccounts();
    console.log("what is here? ", this.teams)
  }

  getTeams()  {
    this.apiService.getResource('teams').subscribe(resp=>{this.teams = resp;})
  }
  selectTeam(p){
  this.apiService.getTeams('players', p).subscribe(resp=>{console.log("haha ",resp); this.players = resp})
  }
  checkweb3(){
    this.web3Service.checkAndInstatiateWeb3();
  }
  getAccounts(){
    this.web3Service.getAccounts()
    .subscribe(resp=>{
      this.accounts=resp;
      this.web3Service.getBalance(this.accounts[0])
      .subscribe(resp=>{
        this.balance = resp;
        console.log(this.balance)
      })
    })
  }
  checkEvent(players){ //pass back selected players array
   this.teamPlayers = players;
  }

}
