import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminModule } from './components/admin/admin.module';
import { PackagesListComponent } from './components/farmpackages/packages-list/packages-list.component';
import { PackagesCreateComponent } from './components/farmpackages/packages-create/packages-create.component';
import { PackagesEditComponent } from './components/farmpackages/packages-edit/packages-edit.component';
import { PackagesDeleteComponent } from './components/farmpackages/packages-delete/packages-delete.component';
import { PackagesViewComponent } from './components/farmpackages/packages-view/packages-view.component';
import { ClientsUserListComponent } from './components/users/clients/clients-user-list/clients-user-list.component';
import { ClientsUserViewComponent } from './components/users/clients/clients-user-view/clients-user-view.component';
import { StaffsUserListComponent } from './components/users/management/staffs-user-list/staffs-user-list.component';
import { StaffsUserCreateComponent } from './components/users/management/staffs-user-create/staffs-user-create.component';
import { StaffsUserEditComponent } from './components/users/management/staffs-user-edit/staffs-user-edit.component';
import { StaffsUserViewComponent } from './components/users/management/staffs-user-view/staffs-user-view.component';
import { StaffsUserDeleteComponent } from './components/users/management/staffs-user-delete/staffs-user-delete.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { ProductsViewComponent } from './components/products/products-view/products-view.component';
import { SubscriptionsListComponent } from './components/subsciptions/subscriptions-list/subscriptions-list.component';
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
import { SubscriptionsEditComponent } from './components/subsciptions/subscriptions-edit/subscriptions-edit.component';
import { MigrationComponent } from './components/migration/migration.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { ChartsModule } from 'ng2-charts';
import { TimeagoModule } from 'ngx-timeago';


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
    ClientsUserListComponent,
    ClientsUserViewComponent,
    StaffsUserListComponent,
    StaffsUserCreateComponent,
    StaffsUserEditComponent,
    StaffsUserViewComponent,
    StaffsUserDeleteComponent,
    ProductsListComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
    ProductsViewComponent,
    SubscriptionsListComponent,
    SubscriptionsViewComponent,
    SubscribersComponent,
    SubscriptionsEditComponent,
    MigrationComponent,
    InvestmentsComponent,
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
        allowedDomains: ['farmfunds.herokuapp.com'],
        //allowedDomains: ['localhost:3000'],
        disallowedRoutes: [],
      },
    }),
    ChartsModule,
    TimeagoModule.forRoot()
  ],
  providers: [ ToasterService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
