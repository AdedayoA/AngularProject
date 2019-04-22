import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;
  auth = firebase.auth();
  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router, private uiService: UIService) { }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', { 
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)]})
    });
  }

onSubmit(form: NgForm) {
  this.authService.login({
    email: form.value.email,
    password: form.value.password
  });
}

onReset(form:NgForm){
   this.auth.sendPasswordResetEmail(form.value.email).then(function () {
    // Email sent.
  }).catch(function (error) {
    // An error happened.
  });
}

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(res => {
        this.router.navigate(['/activity']);
      })
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/activity']);
      })
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/activity']);
      })
  }

  ngOnDestroy(){
    this.loadingSubs.unsubscribe();
  }

}
