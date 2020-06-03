import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { TrainingService } from './../training/training.service';

@Injectable()
export class AuthService {
  isLoggedIn = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService
  ) {}

  registerUser(authData: AuthData) {
    this.afAuth
      .createUserWithEmailAndPassword(
        authData.email,
        authData.password
      )
      .then(result => {
        console.log(result);
        this.authenticated();
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authenticated();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    this.trainingService.cancelSubscriptions();
    this.afAuth.signOut();
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authenticated() {
    this.isAuthenticated = true;
    this.isLoggedIn.next(true);
    this.router.navigate(['/training']);
  }
}
