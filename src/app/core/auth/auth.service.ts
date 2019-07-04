import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private helper = new JwtHelperService();

  constructor(private oauthService: OAuthService) 
  {
      
  }
  
  public isAuthenticated(): boolean 
  {
    const token = this.oauthService.getAccessToken();
    // Check whether the token is expired and return
    // true or false
    return !this.helper.isTokenExpired(token);
  }

  public getUserId(){
    const token = this.oauthService.getIdToken();
    const userData = this.helper.decodeToken(token);

    return (userData.sub);
  }
}