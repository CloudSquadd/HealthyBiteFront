import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly URL = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  getAllRestaurant(): Observable<any[]>{
    return this.httpClient.get<any[]>(environment.api+"test/getAllRepas");
  }
}
