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
import { InvestmentsCreateComponent } from '../../investments/investments-create/investments-create.component';
import { InvestmentsListComponent } from '../../investments/investments-list/investments-list.component';
import { InvestmentsEditComponent } from '../../investments/investments-edit/investments-edit.component';
import { InvestmentsDeleteComponent } from '../../investments/investments-delete/investments-delete.component';
import { InvestmentsViewComponent } from '../../investments/investments-view/investments-view.component';
import { ClientsUserListComponent } from '../../users/clients/clients-user-list/clients-user-list.component';
import { ClientsUserCreateComponent } from '../../users/clients/clients-user-create/clients-user-create.component';
import { ClientsUserEditComponent } from '../../users/clients/clients-user-edit/clients-user-edit.component';
import { ClientsUserViewComponent } from '../../users/clients/clients-user-view/clients-user-view.component';
import { StaffsUserListComponent } from '../../users/management/staffs-user-list/staffs-user-list.component';
import { ClientsUserDeleteComponent } from '../../users/clients/clients-user-delete/clients-user-delete.component';
import { StaffsUserCreateComponent } from '../../users/management/staffs-user-create/staffs-user-create.component';
import { StaffsUserEditComponent } from '../../users/management/staffs-user-edit/staffs-user-edit.component';
import { StaffsUserViewComponent } from '../../users/management/staffs-user-view/staffs-user-view.component';
import { StaffsUserDeleteComponent } from '../../users/management/staffs-user-delete/staffs-user-delete.component';
import { ProductsEditComponent } from '../../products/products-edit/products-edit.component';
import { ProductsListComponent } from '../../products/products-list/products-list.component';
import { ProductsCreateComponent } from '../../products/products-create/products-create.component';
import { ProductsViewComponent } from '../../products/products-view/products-view.component';
import { ProductsDeleteComponent } from '../../products/products-delete/products-delete.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SubscriptionsListComponent } from '../../subsciptions/subscriptions-list/subscriptions-list.component';
import { SubscriptionsViewComponent } from '../../subsciptions/subscriptions-view/subscriptions-view.component';
import { SubscriptionsEditComponent } from '../../subsciptions/subscriptions-edit/subscriptions-edit.component';
import { SubscribersComponent } from '../../subscribers/subscribers.component';


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
        path: 'packages-edit',
        component: PackagesEditComponent,
      },
      {
        path: 'packages-delete',
        component: PackagesDeleteComponent,
      },
      {
        path: 'packages-view',
        component: PackagesViewComponent,
      },
      // investment-route
      {
        path: 'investments-create',
        component: InvestmentsCreateComponent,
      },
      {
        path: 'investments-list',
        component: InvestmentsListComponent,
      },
      {
        path: 'investments-edit',
        component: InvestmentsEditComponent,
      },
      {
        path: 'investments-delete',
        component: InvestmentsDeleteComponent,
      },
      {
        path: 'investments-view',
        component: InvestmentsViewComponent,
      },
      // client-users-route
      {
        path: 'customers-list',
        component: ClientsUserListComponent,
      },
      {
        path: 'clients-user-create',
        component: ClientsUserCreateComponent,
      },
      {
        path: 'clients-user-edit',
        component: ClientsUserEditComponent,
      },
      {
        path: 'customers-view/:id',
        component: ClientsUserViewComponent,
      },
      {
        path: 'clients-user-delete',
        component: ClientsUserDeleteComponent,
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
        path: 'products-delete',
        component: ProductsDeleteComponent,
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
