import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { FailwallComponent } from './failwall/failwall.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FailwallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
