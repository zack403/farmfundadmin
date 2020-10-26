import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule
  ],
  declarations: [
      AdminComponent,
      HeaderComponent,
      SideBarComponent,
      FooterComponent,
      DashboardComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
