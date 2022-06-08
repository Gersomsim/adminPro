import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent{
  progreso1 = 25;
  progreso2 = 35;

  get porcentaje1(){
    return `${this.progreso1}%`
  }
  get porcentaje2(){
    return `${this.progreso2}%`
  }

  cambioValorHijo( event: number ){
    this.progreso1 = event;
  }

}
