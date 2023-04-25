import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './components/models/Livraison';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly URL = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  getAllRestaurant(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.URL+"api/test/getAllRepas");
  }








///// NNNNNAAAAADDDDDAAAAA ccrrrrrruuuuuuudddddddd /////////
  // Add Livraison - Create
  addLivraison(livraison: Livraison): Observable<Livraison> {
    return this.httpClient.post<Livraison>(`${this.URL}addLivraison`, livraison);
  }

  // Get Livraison by Id - Read
  getLivraisonById(id: number): Observable<Livraison> {
    return this.httpClient.get<Livraison>(`${this.URL}getLivraisonById/${id}`);
  }

  // Get All Livraison - Read
  getAllLivraison(): Observable<Livraison[]> {
    return this.httpClient.get<Livraison[]>(`${this.URL}getAllLivraison`);
  }

  // Update Livraison - Update
  updateLivraison(id: number, livraison: Livraison): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}updateLivraison/${id}`, livraison);
  }

  // Delete Livraison - Delete
  deleteLivraisonById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}deleteLivraisonById/${id}`);
  }


}
