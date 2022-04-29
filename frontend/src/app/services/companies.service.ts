import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, ObservableInput } from 'rxjs';

import apiConfig from '../configs/api';
import Company from '../models/Company';
import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  private verifyToken(error: any): ObservableInput<any> {
    if (error.status === 401) {
      this.router.navigate(['/'])
    }

    throw new Error('Não autorizado')
  }

  getCompanies(): Observable<IResponse<Company[]>> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<IResponse<Company[]>>(`${apiConfig.baseUrl}/companies`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<Company[]>()),
      catchError(this.verifyToken)
    )
  }

  createCompany(company: Company): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.post<IResponse<any>>(`${apiConfig.baseUrl}/companies`, company, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<any>()),
      catchError(this.verifyToken)
    )
  }

  deleteCompany(companyId: number): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.delete<IResponse<any>>(`${apiConfig.baseUrl}/companies/${companyId}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<any>()),
      catchError(this.verifyToken)
    )
  }
}
