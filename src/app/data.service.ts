import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly URL = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  getAllRestaurant(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.URL+"api/test/getAllRepas");
  }
  getAllReclamation(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + "api/test/retrieveAllReclamation");
  }
  addReclamation(reclamation: any): Observable<any> {
    return this.httpClient.post(this.URL + "api/test/addReclamation", reclamation);
  }
  addReponse(reponseReclamation: any, idReclamation: number): Observable<any> {
    return this.httpClient.post(this.URL + "api/test/addReponseReclamation/{idReclamation}", reponseReclamation);
  }

}
