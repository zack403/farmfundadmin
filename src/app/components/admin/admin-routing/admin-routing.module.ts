import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const adminRouter: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
      // {
      //   path: 'create-user',
      //   component: CreateUserComponent,
      // },
      // {
      //   path: 'create-usergroup',
      //   component: CreateUserGroupComponent,
      // },
      // {
      //   path: 'role',
      //   component: RoleComponent,
      // },
      // {
      //   path: 'usergroup-list',
      //   component: UserGroupListComponent,
      // },
      // {
      //   path: 'user-list',
      //   component: UserListComponent,
      // },
      // {
      //   path: 'will-list',
      //   component: WillListComponent,
      // },
      // {
      //   path: 'add-user',
      //   component: AddToUserGroupComponent,
      // },
      // {
      //   path: 'view-will',
      //   component: ViewWillComponent,
      // }
    ]
  },
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
