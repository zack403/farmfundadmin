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
  topfiveproducts: any;
  foodData: any= {};
  dateRange : string = 'today';
  orderDateRange: string = "Pending";
  
  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Monthly Sales' },
  ];

  barChartColors: Color[] = [
    {backgroundColor: 'green' },
  ]

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [
    []
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
    this.getMonthlySales();
    this.getYearlySales();
    this.getTopFiveProducts();
  }

  getFoodDashboard() {
    this.dashSvc.Get('dashboard/fooddashboard').subscribe((res: any) => {
      this.foodData = res;
    })
  }

  getYearlySales () {
    let m;
    this.dashSvc.Get('dashboard/fooddashboard/yearlysales').subscribe((res: any) => {
      this.doughnutChartData = res;
      for (m = 0; m < 3; m++) {
        let yearInNo = new Date().getFullYear() - m;
        let yearInstr = yearInNo.toString();
        this.doughnutChartLabels.push(yearInstr);
      }
    })
  }


  getMonthlySales () {
    this.dashSvc.Get('dashboard/fooddashboard/monthlysales').subscribe((res: any) => {
      if(res.length > 0) {
        for (const r of res) {
          this.barChartData[0].data.push(r.totalAmount);
          this.barChartLabels.push(r.monthName.toUpperCase());
        }
      }
    })
  }

  dateCstChanged(event) {
    this.dateRange = event.target.value;
    this.getTopFive();
  }

  dateProdChanged(event) {
    this.dateRange = event.target.value;
    this.getTopFiveProducts();
  }

  dateOrderChanged(event) {
    this.orderDateRange = event.target.value;
    this.getOrders()
  }

  getTopFive () {
    this.dashSvc.Get(`dashboard/fooddashboard/topfivecustomer?dateRange=${this.dateRange}`).subscribe((res: any) => {
      this.topfivecustomer = res;
    })
  }

  getTopFiveProducts () {
    this.dashSvc.Get(`dashboard/fooddashboard/topfiveproducts?dateRange=${this.dateRange}`).subscribe((res: any) => {
      this.topfiveproducts = res;
    })
  }
  

  getOrders () {
    this.dashSvc.Get(`dashboard/fooddashboard/orderInfo?dateRange=${this.orderDateRange}`).subscribe((res: any) => {
      this.thisWeek = res.thisWeek;
      this.lastWeek = res.lastWeek;
      this.today = res.today;
    })
  }

}
