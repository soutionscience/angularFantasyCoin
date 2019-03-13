import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  CreatAccountForm: FormGroup
  AccountId: String

  constructor(private dialogRef: MatDialogRef<CreateAccountComponent>,
    private fb: FormBuilder,
    private web3Service: Web3Service) { }

  ngOnInit() {
    this.getBaseAccount()
    this.createForm()
  }

  createAccount(){
  this.getBaseAccount; //get account address
    this.close();
  }
  close(){
    this.dialogRef.close()
  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      AccounId: [this.AccountId, [Validators.required]]
    })

  }
  getBaseAccount(){
this.web3Service.getCoinBase()
.subscribe(resp=>{
  this.AccountId = resp
})
  }

}
