import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ActivityComponent } from './activity/activity.component';
import { CurrentActivityComponent } from './activity/current-activity/current-activity.component';
import { NewActivityComponent } from './activity/new-activity/new-activity.component';
import { PastActivityComponent } from './activity/past-activity/past-activity.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopActivityComponent } from './activity/current-activity/stop-activity-component';
import { AuthService } from './auth/auth-service';
import { AuthGuard } from './auth/auth.guard';
import { ActivityService } from './activity/activity.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ActivityComponent,
    CurrentActivityComponent,
    NewActivityComponent,
    PastActivityComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthService, ActivityService],
  bootstrap: [AppComponent],
  entryComponents: [StopActivityComponent]
})
export class AppModule { }
