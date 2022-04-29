import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import apiConfig from '../configs/api';
import IResponse from '../models/IResponse';
import Auth from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  auth(username: string, password: string): Observable<IResponse<Auth>> {
    return this.httpClient.post<IResponse<Auth>>(`${apiConfig.baseUrl}/login`, { username, password });
  }
}
