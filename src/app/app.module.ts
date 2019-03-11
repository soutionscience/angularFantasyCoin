import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { restangularConfigFactory } from './shared/restangular.config';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UnlockMetamaskComponent } from './dialogs/unlock-metamask/unlock-metamask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateAccountComponent } from './dialogs/create-account/create-account.component';
import { InstallMetamaskComponent } from './dialogs/install-metamask/install-metamask.component';
import { LoginMetamaskComponent } from './dialogs/login-metamask/login-metamask.component';


@NgModule({
  declarations: [UnlockMetamaskComponent, CreateAccountComponent, InstallMetamaskComponent, LoginMetamaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(restangularConfigFactory),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [],
  entryComponents: [UnlockMetamaskComponent, InstallMetamaskComponent, CreateAccountComponent, LoginMetamaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
