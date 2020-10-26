import { MigrationComponent } from './../../migration/migration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PackagesCreateComponent } from '../../farmpackages/packages-create/packages-create.component';
import { PackagesListComponent } from '../../farmpackages/packages-list/packages-list.component';
import { PackagesEditComponent } from '../../farmpackages/packages-edit/packages-edit.component';
import { PackagesDeleteComponent } from '../../farmpackages/packages-delete/packages-delete.component';
import { PackagesViewComponent } from '../../farmpackages/packages-view/packages-view.component';
import { ClientsUserListComponent } from '../../users/clients/clients-user-list/clients-user-list.component';
import { ClientsUserViewComponent } from '../../users/clients/clients-user-view/clients-user-view.component';
import { StaffsUserListComponent } from '../../users/management/staffs-user-list/staffs-user-list.component';
import { StaffsUserCreateComponent } from '../../users/management/staffs-user-create/staffs-user-create.component';
import { StaffsUserEditComponent } from '../../users/management/staffs-user-edit/staffs-user-edit.component';
import { StaffsUserViewComponent } from '../../users/management/staffs-user-view/staffs-user-view.component';
import { StaffsUserDeleteComponent } from '../../users/management/staffs-user-delete/staffs-user-delete.component';
import { ProductsEditComponent } from '../../products/products-edit/products-edit.component';
import { ProductsListComponent } from '../../products/products-list/products-list.component';
import { ProductsCreateComponent } from '../../products/products-create/products-create.component';
import { ProductsViewComponent } from '../../products/products-view/products-view.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SubscriptionsListComponent } from '../../subsciptions/subscriptions-list/subscriptions-list.component';
import { SubscriptionsViewComponent } from '../../subsciptions/subscriptions-view/subscriptions-view.component';
import { SubscriptionsEditComponent } from '../../subsciptions/subscriptions-edit/subscriptions-edit.component';
import { SubscribersComponent } from '../../subscribers/subscribers.component';
import { InvestmentsComponent } from '../../investments/investments.component';
import { FarmDashboardComponent } from '../farm-dashboard/farm-dashboard.component';


const adminRouter: Routes = [
  {
    // Admin-route
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      // empty-route
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      // dashboard-route
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      // farm-packages-route
      {
        path: 'packages-create',
        component: PackagesCreateComponent,
      },
      {
        path: 'packages-list',
        component: PackagesListComponent,
      },
      {
        path: 'packages-edit/:id',
        component: PackagesEditComponent,
      },
      {
        path: 'packages-delete',
        component: PackagesDeleteComponent,
      },
      {
        path: 'packages-view/:id',
        component: PackagesViewComponent,
      },
      // client-users-route
      {
        path: 'customers-list',
        component: ClientsUserListComponent,
      },
      {
        path: 'customers-view/:id',
        component: ClientsUserViewComponent,
      },
      // staff-users-route
      {
        path: 'staffs-user-list',
        component: StaffsUserListComponent,
      },
      {
        path: 'staffs-user-create',
        component: StaffsUserCreateComponent,
      },
      {
        path: 'staffs-user-edit',
        component: StaffsUserEditComponent,
      },
      {
        path: 'staffs-user-view',
        component: StaffsUserViewComponent,
      },
      {
        path: 'staffs-user-delete',
        component: StaffsUserDeleteComponent,
      },
      // products-route
      {
        path: 'products-list',
        component: ProductsListComponent,
      },
      {
        path: 'products-create',
        component: ProductsCreateComponent,
      },
      {
        path: 'products-edit/:id',
        component: ProductsEditComponent,
      },
      {
        path: 'products-list',
        component: ProductsListComponent,
      },
      {
        path: 'products-view/:id',
        component: ProductsViewComponent,
      },
      {
        path: 'orders-list',
        component: SubscriptionsListComponent,
      },
      {
        path: 'orders-view/:id',
        component: SubscriptionsViewComponent,
      },
      {
        path: 'orders-edit/:id',
        component: SubscriptionsEditComponent,
      },
      {
        path: 'farmify-market-subscribers',
        component: SubscribersComponent,
      },
      {
        path: 'investments',
        component: InvestmentsComponent,
      },
      {
        path: 'migration',
        component: MigrationComponent,
      },
      {
        path: 'farm-dashboard',
        component: FarmDashboardComponent,
      }
    ]
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRouter),
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class AdminRoutingModule { }
