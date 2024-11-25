import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminAddBikeComponent } from './Components/admin-add-bike/admin-add-bike.component';
import { AdminDashHomeComponent } from './Components/admin-dash-home/admin-dash-home.component';
import { AdminRentalRequestComponent } from './Components/admin-rental-request/admin-rental-request.component';
import { AdminUpdateBikeComponent } from './Components/admin-update-bike/admin-update-bike.component';
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import { AdminUserCreationComponent } from './Components/admin-user-creation/admin-user-creation.component';
import { UserRentalBikeComponent } from './Components/user-rental-bike/user-rental-bike.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UserViewBikeComponent } from './Components/user-view-bike/user-view-bike.component';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { AdminUserRequestComponent } from './Components/admin-user-request/admin-user-request.component';
import { AdminDeleteBikeComponent } from './Components/admin-delete-bike/admin-delete-bike.component';
import { HomeComponent } from './Components/home/home.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';

const routes: Routes = [
  // {path:'/', component:LandingPageComponent},

 {
  path:'admin',
  component : AdminDashboardComponent,
  children : [
    {path:'addBike', component:AdminAddBikeComponent},
    {path:'dashHome', component:AdminDashHomeComponent},
    {path:'rentalRequest', component:AdminRentalRequestComponent},
    {path:'updateBike', component:AdminUpdateBikeComponent},
    {path:'reports', component:AdminReportsComponent},
    {path:'userCreation', component:AdminUserCreationComponent},
    {path:'userRequest', component:AdminUserRequestComponent},
    {path:'deleteBike', component:AdminDeleteBikeComponent},

  ]
 },

 {
  path:'user',
  component:LandingPageComponent,
  children:[
    {path:'rentBike', component:UserRentalBikeComponent},
    {path: 'userDash', component:UserDashboardComponent},
    {path:'viewBike', component:UserViewBikeComponent},
  ]
 },

 {
  path:'',
  component:BlankLayoutComponent,
  children: [
    {path:'home', component:HomeComponent},
    {path:'login', component:LogInComponent},
    {path:'register', component:UserRegisterComponent},

  ]
 },
  {
  path:'Update/:id',
  component:UserUpdateComponent,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
