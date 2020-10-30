import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard.service';


declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  thisWeek :number;
  lastWeek: number;
  today: number;
  topfivecustomer: any;


  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  foodData: any= {};
  
  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.labels;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33, 45, 53, 48, 56, 58, 80], label: 'Monthly Sales' }
  ];

  barChartColors: Color[] = [
    {backgroundColor: 'green' },
  ]

  doughnutChartLabels: Label[] = ['Prod1', 'Prod2', 'Prod3'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  doughnutChartColors: Color[] = [
    {backgroundColor: ['green', '#8b0000', '#ebb40e' ]}
  ]

  constructor(private dashSvc: DashboardService) { }

  ngOnInit() {
    $.getScript('assets/js/sparkline.js');

    this.getDashboardData();
  }

  getDashboardData() {
    this.getFoodDashboard();
    this.getTopFive();
    this.getOrders();
    // this.getMonthlySales();
    // this.getYearlySales();
  }

  getFoodDashboard() {
    this.dashSvc.Get('dashboard/fooddashboard').subscribe((res: any) => {
      this.foodData = res;
      console.log("foodata",this.foodData)
    })
  }

  getYearlySales () {
    this.dashSvc.Get('dashboard/fooddashboard/yearlysales').subscribe((res: any) => {
      this.doughnutChartLabels.push(res.productName);
      this.doughnutChartData.push(res.unit);
    })
  }


  getMonthlySales () {
    this.dashSvc.Get('dashboard/fooddashboard/monthlysales').subscribe((res: any) => {
      this.barChartData = res as any [];
    })
  }

  getTopFive () {
    this.dashSvc.Get('dashboard/fooddashboard/topfivecustomer').subscribe((res: any) => {
      this.topfivecustomer = res;
    })
  }
  

  getOrders () {
    this.dashSvc.Get('dashboard/fooddashboard/orderInfo').subscribe((res: any) => {
      this.thisWeek = res.thisWeek;
      this.lastWeek = res.lastWeek;
      this.today = res.today;
    })
  }

}
