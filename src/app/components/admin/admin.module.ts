import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TimeagoModule } from 'ngx-timeago';


@NgModule({
  imports: [
    CommonModule,
    TimeagoModule,
    AdminRoutingModule,
    ChartsModule
    
  ],
  declarations: [
      AdminComponent,
      HeaderComponent,
      SideBarComponent,
      FooterComponent,
      DashboardComponent,
      FarmDashboardComponent,
      NotificationsComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
