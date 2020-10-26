import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HttpService } from 'src/app/services/http.service';

declare var $: any;

@Component({
  selector: 'app-farm-dashboard',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.css']
})
export class FarmDashboardComponent implements OnInit {
  foodData: any= {};
  constructor(private dashSvc: DashboardService) { }

  ngOnInit() {
    $.getScript('assets/js/sparkline.js');

    this.getFoodDashboard();
  }

  getFoodDashboard() {
    this.dashSvc.Get('dashboard/fooddashboard').subscribe((res: any) => {
      this.foodData = res;
    })
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

}
