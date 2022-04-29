import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, ObservableInput } from 'rxjs';

import apiConfig from '../configs/api';
import Car from '../models/Car';
import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  private verifyToken(error: any): ObservableInput<any> {
    console.log('ERROR', error)

    if (error.status === 401) {
      this.router.navigate([''])
    }

    throw new Error('Não autorizado')
  }

  getCars(): Observable<IResponse<Car[]>> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<IResponse<Car[]>>(`${apiConfig.baseUrl}/cars`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<Car[]>()),
      catchError(this.verifyToken)
    )
  }

  createCar(car: Car): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    console.log('CAR', car)

    return this.httpClient.post<IResponse<any>>(`${apiConfig.baseUrl}/cars`, car, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
    .pipe(
      map((response) => response.body || new Response<any>()),
      catchError(this.verifyToken)
    )
  }

  deleteCar(carId: number): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.delete<IResponse<any>>(`${apiConfig.baseUrl}/cars/${carId}`, {
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
