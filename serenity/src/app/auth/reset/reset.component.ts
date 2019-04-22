import { Component, OnInit, OnDestroy} from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from "rxjs";
import { UIService } from "../../shared/ui.service";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"]
})
export class ResetComponent implements OnInit, OnDestroy {
  resetForm: FormGroup;
  auth = firebase.auth();
  isLoading = false;
  private loadingSubs: Subscription;
  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackbar: MatSnackBar,
    private uiService: UIService
  ) {}

  ngOnInit() {
    this.resetForm = new FormGroup({
      email: new FormControl("", {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  onReset(form: NgForm) {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(
      isLoading => {
        this.isLoading = isLoading;
      }
    );
    this.auth
      .sendPasswordResetEmail(form.value.email)
      .then(function() {
        // Email sent.
      })
      .catch(function(error) {
        // An error happened.
      });
    this.router.navigate(["/login"]);
    this.snackbar.open(
      "An email has been sent to you. Follow the instructions to reset your password"
    );
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }
}
