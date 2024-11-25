import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AdminDashHomeComponent } from './Components/admin-dash-home/admin-dash-home.component';
import { AdminAddBikeComponent } from './Components/admin-add-bike/admin-add-bike.component';
import { AdminUserCreationComponent } from './Components/admin-user-creation/admin-user-creation.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserRentalBikeComponent } from './Components/user-rental-bike/user-rental-bike.component';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { UserViewBikeComponent } from './Components/user-view-bike/user-view-bike.component';
import { AdminUpdateBikeComponent } from './Components/admin-update-bike/admin-update-bike.component';
import { AdminRentalRequestComponent } from './Components/admin-rental-request/admin-rental-request.component';
import { AdminUserRequestComponent } from './Components/admin-user-request/admin-user-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminDeleteBikeComponent } from './Components/admin-delete-bike/admin-delete-bike.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminRentalReportComponent } from './Components/admin-rental-report/admin-rental-report.component';
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
    LandingPageComponent,

    AdminDashboardComponent,
    UserDashboardComponent,
    AdminDashHomeComponent,
    AdminAddBikeComponent,
    AdminUserCreationComponent,
    LogInComponent,
    UserRegisterComponent,
    UserRentalBikeComponent,
    AdminReportsComponent,
    BlankLayoutComponent,
    UserViewBikeComponent,
    AdminUpdateBikeComponent,
    AdminRentalRequestComponent,
    AdminUserRequestComponent,
    AdminDeleteBikeComponent,
    HomeComponent,
    AdminRentalReportComponent,
    UserUpdateComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Duration in milliseconds
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true, // Avoid duplicate toasts
    }),
    HttpClientModule
  
    
  
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
