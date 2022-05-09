import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  data: any;
  constructor() {
    this.data = {
      labels: [
        "Ejercicios resueltos", 
        "Temarios completados"
      ],
      datasets: [
        {
          label: "Matemáticas",
          backgroundColor: "red",
          data: 
          [
            85, 
            89
          ]
        },
        {
          label: "Biología",
          backgroundColor: "green",
          data: [
            45, 
            209
          ]
        },
        {
          label: "Lengua",
          backgroundColor: "blue",
          data: [
            106, 
            57
          ]
        }
      ]
    };
  }
  ngOnInit(): void {
    
  }

}
