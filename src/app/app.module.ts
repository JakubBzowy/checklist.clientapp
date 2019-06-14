import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './core/auth/auth.service';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { ListsComponent } from './modules/lists/lists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    NgbModule
  ],
  providers: [
    { provide: OAuthStorage, useValue: localStorage },
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
