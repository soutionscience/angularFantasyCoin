import { Component, OnInit } from '@angular/core';
import { BrowserDetectionService } from 'src/app/services/browser-detection.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-install-metamask',
  templateUrl: './install-metamask.component.html',
  styleUrls: ['./install-metamask.component.css']
})
export class InstallMetamaskComponent implements OnInit {
  buttonText: String
  buttonLink: String
  buttonImage: String

  constructor(private browserDetect: BrowserDetectionService, private dialogRef: MatDialogRef<InstallMetamaskComponent>) { }

  ngOnInit() {
    this.detect()
  }
  detect(){
    let browser;
    this.browserDetect.detectBrowser()
    .subscribe(resp=>{

      if(resp == 'isOpera'){
        this.buttonText = "Get Metamask from Opera Store"
        this.buttonLink="https://addons.opera.com/en/extensions/details/metamask/"
        this.buttonImage="fab fa-opera"
      }
      if(resp == 'isChrome'){
        this.buttonText = "Get Metamask from Chrome Store"
        this.buttonLink="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        this.buttonImage="fab fa-chrome"
      }
      if(resp == 'isFireFox'){
        this.buttonText = "Get Metamask from FireFox Store"
        this.buttonLink="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/"
        this.buttonImage="fab fa-firefox"
      }
      if(resp == 'unKnown'){
        this.buttonText = "Get Metamask from Chrome Store"
        this.buttonLink="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        this.buttonImage="fab fa-chrome"
      }
      if(resp == 'isSafari'){
        this.buttonText = "Sorry Safari does not support Metamask at the momment. Please use chrome"
        this.buttonLink=""
        this.buttonImage="fab fa-safari"

      }
    })
  }
  close(){
    this.dialogRef.close()
  }

}
