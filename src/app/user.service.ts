import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;
  errorMessage: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  login(event) {
    event.preventDefault();

    let userEmail = event.target.elements[0].value;
    let password = event.target.elements[1].value;

    this.afAuth.auth.signInWithEmailAndPassword(userEmail, password).then(() => {
      this.errorMessage = '';
      this.router.navigate(['all-matches']);
    }).catch((error) => {
      this.errorMessage = error.message;
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getPotentialMatches() {

  }

  getMatched() {

  }

  getChatLog(otherUser) {
    
  }

}
