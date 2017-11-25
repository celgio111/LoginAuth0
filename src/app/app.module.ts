import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { Auth } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    routing,

  ],
  providers: [appRoutingProviders, Auth, AUTH_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
