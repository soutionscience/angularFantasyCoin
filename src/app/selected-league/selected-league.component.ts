import { Component, OnInit, Input } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selected-league',
  templateUrl: './selected-league.component.html',
  styleUrls: ['./selected-league.component.css']
})
export class SelectedLeagueComponent implements OnInit {
  compeForm: FormGroup
  @Input() league: String
  competitions: String [] = [];
  competitionCount: Number;


  constructor(private web3Service: Web3Service, private fb: FormBuilder) { }

  ngOnInit() {
  }
  createCompForm(){
    this.compeForm = this.fb.group({

      prize: ['', Validators.required],
      gas: ['1000000', Validators.required]

    })

  }
  createCompetition(league){
    console.log('creating ', league)


  }
  join(){
    this.web3Service.joinCompetion(0, this.league)
    .subscribe(resp=> console.log(resp))
  }
  getCompetitons(league){
    console.log('what is league ', league)
    this.web3Service.getNumberOfCompetitions(league)
    .subscribe(resp=>{
      this.competitionCount = resp;
     this.web3Service.getAllCompetitons(league, '1000000', this.competitionCount)
     .subscribe(resp=>{
       console.log('the fuck is resp ', resp)
       this.competitions = resp;
     })
     })
   }
  }
