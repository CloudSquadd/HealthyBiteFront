import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'liste-reclamations',
  templateUrl: './liste-reclamations.component.html',
  styleUrls: ['./liste-reclamations.component.scss'],
  providers: [DataService],
})
export class ListeReclamationsComponent implements OnInit {

  reclamation: any[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {


    this.dataService.getAllReclamation().subscribe(data => {
      for (let i = 0; i < data.length; i++) {

        this.reclamation.push(data[i]);
        console.log(this.reclamation);
      }
      console.log(this.reclamation);
    });

  }

}
