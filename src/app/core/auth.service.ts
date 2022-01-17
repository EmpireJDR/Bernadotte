import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/signin', {
      username,
      password,
    });
  }

  public register(username: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/signup', {
      username,
      password,
    });
  }
}
