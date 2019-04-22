import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { AuthData } from './auth-data-model';
import { ActivityService } from '../activity/activity.service';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { UIService } from '../shared/ui.service';


@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;



    constructor(private router: Router, private afAuth: AngularFireAuth, private activityService: ActivityService, private snackbar: MatSnackBar, private uiService: UIService) {}

    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            if (user){
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/activity']);
            }
            else
            {
                this.activityService.cancelSubscription();
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        });
    }

registerUser(authData: AuthData){
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
    .createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => { 
        this.uiService.loadingStateChanged.next(false);
    })
        .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.snackbar.open(error.message, null, {
            duration: 3000
        });
    });
    }

login(authData: AuthData){
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.
    signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            this.uiService.loadingStateChanged.next(false);
        })
        .catch(error => {
            this.uiService.loadingStateChanged.next(false);
            this.snackbar.open(error.message, null, {
                duration: 3000
            });
        });
      } 

logout(){
    this.afAuth.auth.signOut();
}

isAuth(){
    return this.isAuthenticated;
}

    doFacebookLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.FacebookAuthProvider();
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                }, err => {
                    console.log(err);
                    reject(err);
                })
        })
    }


    doGoogleLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                })
        })
    }

    doTwitterLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.TwitterAuthProvider();
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                }, err => {
                    console.log(err);
                    reject(err);
                })
        })
    }
}   
