import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private oauthService: OAuthService) 
  {

  }

  canActivate(): boolean 
  {
    if (!this.auth.isAuthenticated()) {
      this.oauthService.initImplicitFlow();
      return false;
    }
    return true;
  }
}