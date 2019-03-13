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




  teams: Generic[]
  players: Generic[]
  accounts: String [];
  balance: String;
  teamPlayers: any [];
  completeTeam: boolean;
  myplayers: String;
  myTeam: any [];


  constructor(private apiService: ApiServiceService, private web3Service: Web3Service, private ref: ChangeDetectorRef) { }

  ngOnInit (){
    //this.myTeam = [];
    this.myplayers='players';
    this.getTeams();
    this.getAccounts();
    this.completeTeam = true;
    this.getAllPlayers();
  }

  getTeams()  {
    this.apiService.getResource('teams').subscribe(resp=>{this.teams = resp;})
  }
  selectTeam(p){
  this.apiService.getTeams('players', p).subscribe(resp=>{ this.players = resp})
  }
  getAllPlayers(){
    this.apiService.getResource('players')
    .subscribe(resp=>{console.log('getting all players', resp);this.players = resp})
  }
  checkweb3(){
    this.web3Service.checkAndInstatiateWeb3();
  }
  getAccounts(){
    this.web3Service.getAccounts()
    .subscribe(resp=>{
      this.accounts=resp;
      console.log('whos account is this?' ,this.accounts)
      this.web3Service.getBalance(this.accounts[0])
      .subscribe(resp=>{
        this.balance = resp;
        console.log(this.balance)
      })
    })
    this.ref.detectChanges();
  }
  checkEvent(players){ //pass back selected players array
   this.teamPlayers = players;
   this.teamComplete(players)
  }
  teamComplete(players){
    if(players.length  == 11){
      this.completeTeam = false
    }else{
      this.completeTeam = true
    }


  }
  sendTeam(){//send selected team to server

   let user = {'username': this.accounts[0], 'password':'test'}
    let savedUser=[] //local varible to store user is returned by server. Will be removed later
     this.apiService.postResource('users', user).subscribe(resp=>{
      savedUser.push(resp)
      //after getting user _Id use it to save team
       this.apiService.postUserTeam('users', savedUser[0]._id, 'players', this.teamPlayers)
      .subscribe(resp=>{
        console.log("teams saved", resp)
      })

    })
  }

}
