import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'add-reponse',
  templateUrl: './add-reponse.component.html',
  styleUrls: ['./add-reponse.component.scss'],
  providers: [DataService]
})
export class AddReponseComponent {

  reponseReclamation: any = {};
  idReclamation: number;

  constructor(private dataService: DataService) { }

  onSubmit() {
    this.dataService.addReponse(this.reponseReclamation,this.idReclamation).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.reponseReclamation = {};
  }

}
