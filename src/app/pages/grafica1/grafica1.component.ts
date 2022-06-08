import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  grafica = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    data: [233, 2453, 786],
    title: 'Ventas'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
