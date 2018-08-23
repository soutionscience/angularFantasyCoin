import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { restangularConfigFactory } from './shared/restangular.config';
import { RestangularModule, Restangular} from 'ngx-restangular'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(restangularConfigFactory)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
