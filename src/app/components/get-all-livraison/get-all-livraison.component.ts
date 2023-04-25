import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/data.service';
@Component({
  selector: 'get-all-livraison',
  templateUrl: './get-all-livraison.component.html',
  styleUrls: ['./get-all-livraison.component.css'],
  providers: [DataService],
})
export class GetAllLivraisonComponent implements OnInit {


  Livraisons: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: DataService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getAllLivraison().subscribe(data => {
      this.Livraisons = data;
     
    })
  }

  deleteLivraison(id: number){
    this.service.deleteLivraisonById(id).subscribe(data => {
      this.Livraisons = this.Livraisons.filter(Livraison => Livraison.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }


}
