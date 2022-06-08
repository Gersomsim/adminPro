import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title: string    = 'Sin titulo';
  @Input() labels: string[] = [];
  @Input() data: number[]   = [];


  public doughnutChartLabels: string[] = this.labels;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [ {
      data: [],
      backgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBorderColor:['#000000','#000000','#00000003']
     }]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData.labels = this.labels;
    this.doughnutChartData.datasets[0].data = this.data;
  }

}
