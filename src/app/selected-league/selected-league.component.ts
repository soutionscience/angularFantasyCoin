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

}
