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
  topfiveinvestors : any;
  topfivefarms : any;




  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Monthly Investments' }
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
    this.getFarmDashboard();
    this.getInvInfo();
    this.getTopFiveFarms();
    this.getTopFiveInvestors();
    this.getMonthlyInvs();
    this.getYearlyInvs();
  }


  getFarmDashboard() {
    this.dashSvc.Get('dashboard/farminvestmentdashboard').subscribe((res: any) => {
      this.farmData = res;
    })
  }

  getTopFiveInvestors () {
    this.dashSvc.Get('dashboard/farminvestmentdashboard/topfiveinvestors').subscribe((res: any) => {
      this.topfiveinvestors = res;
    })
  }

  getTopFiveFarms () {
    this.dashSvc.Get('dashboard/farminvestmentdashboard/topfivefarms').subscribe((res: any) => {
      this.topfivefarms = res;
    })
  }
  

  getInvInfo () {
    this.dashSvc.Get('dashboard/farminvestmentdashboard/invInfo').subscribe((res: any) => {
      this.pendingInv = res.pendingInv;
      this.activeInv = res.activeInv;
    })
  }

  getYearlyInvs () {
    let m;
    this.dashSvc.Get('dashboard/farminvestmentdashboard/yearlyinvs').subscribe((res: any) => {
      this.doughnutChartData = res;

      for (m = 0; m < 3; m++) {
        let yearInNo = new Date().getFullYear() - m;
        let yearInstr = yearInNo.toString();
        this.doughnutChartLabels.push(yearInstr);
      }
    })
  }


  getMonthlyInvs () {
    this.dashSvc.Get('dashboard/farminvestmentdashboard/monthlyinvs').subscribe((res: any) => {
      if(res.length > 0) {
        for (const r of res) {
          this.barChartData[0].data.push(r.totalAmount);
          this.barChartLabels.push(r.monthName.toUpperCase());
        }
      }
    })
  }


  

}
