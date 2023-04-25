import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';


@Component({
  selector: 'add-reclamations',
  templateUrl: './add-reclamations.component.html',
  styleUrls: ['./add-reclamations.component.scss'],
  providers: [DataService]
})
export class AddReclamationsComponent  {

  reclamation: any = {};

  constructor(private dataService: DataService) { }

  onSubmit() {
    this.dataService.addReclamation(this.reclamation).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.reclamation = {};
  }
}
