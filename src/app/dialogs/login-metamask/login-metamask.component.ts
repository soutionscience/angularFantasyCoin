import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-metamask',
  templateUrl: './login-metamask.component.html',
  styleUrls: ['./login-metamask.component.css']
})
export class LoginMetamaskComponent implements OnInit {
  coinBase: String

  constructor(private web3Service: Web3Service,
    private apiService: ApiServiceService,
    private  dialogRef: MatDialogRef<LoginMetamaskComponent>) { }

  ngOnInit() {
    this.getCoinBase()
  }

  getCoinBase(){
    this.web3Service.getCoinBase()
    .subscribe(resp=>{
      this.coinBase = resp
    })
  }


  login(){
   this.apiService.getSpecificResource('auth', this.coinBase)
   .subscribe(resp=>{
     console.log('what is the resp ', resp)
   })
    this.close();

  }
  close(){
    this.dialogRef.close()
  }

}
