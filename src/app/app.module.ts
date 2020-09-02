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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterService } from './services/toaster.service';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubscribersComponent } from './components/subscribers/subscribers.component'; 
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


export function tokenGetter() {
  return localStorage.getItem("adtoken");
}

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
    SubscribersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressBar: true
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['https://farmfunds.herokuapp.com'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [ ToasterService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
