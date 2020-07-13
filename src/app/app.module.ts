import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminModule } from './components/admin/admin.module';
import { PackagesListComponent } from './components/farmpackages/packages-list/packages-list.component';
import { PackagesCreateComponent } from './components/farmpackages/packages-create/packages-create.component';
import { PackagesEditComponent } from './components/farmpackages/packages-edit/packages-edit.component';
import { PackagesDeleteComponent } from './components/farmpackages/packages-delete/packages-delete.component';
import { PackagesViewComponent } from './components/farmpackages/packages-view/packages-view.component';
import { InvestmentsCreateComponent } from './components/investments/investments-create/investments-create.component';
import { InvestmentsListComponent } from './components/investments/investments-list/investments-list.component';
import { InvestmentsEditComponent } from './components/investments/investments-edit/investments-edit.component';
import { InvestmentsDeleteComponent } from './components/investments/investments-delete/investments-delete.component';
import { InvestmentsViewComponent } from './components/investments/investments-view/investments-view.component';
import { ClientsUserListComponent } from './components/users/clients/clients-user-list/clients-user-list.component';
import { ClientsUserCreateComponent } from './components/users/clients/clients-user-create/clients-user-create.component';
import { ClientsUserEditComponent } from './components/users/clients/clients-user-edit/clients-user-edit.component';
import { ClientsUserDeleteComponent } from './components/users/clients/clients-user-delete/clients-user-delete.component';
import { ClientsUserViewComponent } from './components/users/clients/clients-user-view/clients-user-view.component';
import { StaffsUserListComponent } from './components/users/management/staffs-user-list/staffs-user-list.component';
import { StaffsUserCreateComponent } from './components/users/management/staffs-user-create/staffs-user-create.component';
import { StaffsUserEditComponent } from './components/users/management/staffs-user-edit/staffs-user-edit.component';
import { StaffsUserViewComponent } from './components/users/management/staffs-user-view/staffs-user-view.component';
import { StaffsUserDeleteComponent } from './components/users/management/staffs-user-delete/staffs-user-delete.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ProductsViewComponent } from './components/products/products-view/products-view.component';
import { SubscriptionsListComponent } from './components/subsciptions/subscriptions-list/subscriptions-list.component';
import { SubscriptionsCreateComponent } from './components/subsciptions/subscriptions-create/subscriptions-create.component';
import { SubscriptionsEditComponent } from './components/subsciptions/subscriptions-edit/subscriptions-edit.component';
import { SubscriptionsDeleteComponent } from './components/subsciptions/subscriptions-delete/subscriptions-delete.component';
import { SubscriptionsViewComponent } from './components/subsciptions/subscriptions-view/subscriptions-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ResetPasswordComponent,
    LoginComponent,
    PackagesListComponent,
    PackagesCreateComponent,
    PackagesEditComponent,
    PackagesDeleteComponent,
    PackagesViewComponent,
    InvestmentsCreateComponent,
    InvestmentsListComponent,
    InvestmentsEditComponent,
    InvestmentsDeleteComponent,
    InvestmentsViewComponent,
    ClientsUserListComponent,
    ClientsUserCreateComponent,
    ClientsUserEditComponent,
    ClientsUserDeleteComponent,
    ClientsUserViewComponent,
    StaffsUserListComponent,
    StaffsUserCreateComponent,
    StaffsUserEditComponent,
    StaffsUserViewComponent,
    StaffsUserDeleteComponent,
    ProductsListComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    ProductsViewComponent,
    SubscriptionsListComponent,
    SubscriptionsCreateComponent,
    SubscriptionsEditComponent,
    SubscriptionsDeleteComponent,
    SubscriptionsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
