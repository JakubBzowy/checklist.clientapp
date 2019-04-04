import { Component } from '@angular/core';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
    public navbarCollapsed = true; 

    constructor(private oauthService: OAuthService) {

    }

    public login() {
        this.oauthService.initImplicitFlow();
    }

    public logoff() {
        this.oauthService.logOut();
    }

    public get name() {      
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims;
    }
}
