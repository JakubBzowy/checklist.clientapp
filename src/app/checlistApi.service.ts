import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
    providedIn: 'root'
  })

export class ChecklistApi{
private apiUrl = 'http://localhost:51987/api/';

constructor(private http: HttpClient, private oauthService: OAuthService) {}

public headers = new HttpHeaders()
.append('Content-Type', 'application/json')
.append('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

getAllListsForUser(userId: number) :Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'Lists/'
    + '?userId=' + userId,
    {headers: this.headers})
}

}