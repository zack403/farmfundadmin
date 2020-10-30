import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard.service';

declare var $: any;

@Component({
  selector: 'app-farm-dashboard',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.css']
})
export class FarmDashboardComponent implements OnInit {
  farmData: any= {};
  pendingInv: number;
  activeInv: number;
  invSummary : any;
  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



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

  doughnutChartLabels: Label[] = ['Fish', 'Pig', 'Chicken'];
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
    this.getFarmDashboard();
    this.getInvInfo();
    this.getInvSummary();
    // this.getMonthlySales();
    // this.getYearlySales();
  }


  getFarmDashboard() {
    this.dashSvc.Get('dashboard/farminvestmentdashboard').subscribe((res: any) => {
      this.farmData = res;
    })
  }

  getInvSummary () {
    this.dashSvc.Get('dashboard/farminvestmentdashboard/invSummary').subscribe((res: any) => {
      this.invSummary = res.invSummary;
    })
  }
  

  getInvInfo () {
    this.dashSvc.Get('dashboard/farminvestmentdashboard/invInfo').subscribe((res: any) => {
      this.pendingInv = res.pendingInv;
      this.activeInv = res.activeInv;
    })
  }


  

}
