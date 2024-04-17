import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  API_URL: string = 'http://localhost:8080/persona';
  constructor(private httpClient: HttpClient) { }

  getPersonas(): Observable<any> {

    return this.httpClient.get(this.API_URL).pipe(res=> res);
  }
}
