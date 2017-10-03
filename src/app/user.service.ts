import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import * as firebaseStorage from 'firebase/storage';
import { Router } from '@angular/router';
import { User } from './user.model';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;
  errorMessage: string = '';
  users: FirebaseListObservable<any[]>;

  constructor(private storage: FirebaseApp, public afAuth: AngularFireAuth, private router: Router, private database: AngularFireDatabase)
  {
    this.user = afAuth.authState;
    this.users = database.list('users')
  }
  //wish list - user verification email
  //interested in, age, age range, location, gender, bday, email, username, photo
  createUser(user: User) {
    event.preventDefault();

    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
      this.database.list('users').push(user);
// <<<<<<< HEAD
      let imageRef = this.storage.storage().ref().child('images');
      imageRef.put(user.image[0]).then(() => {
        console.log('success');
      }).catch(() => {
        console.log(':(');
      })
// =======
//         this.router.navigate(['all-matches']);
// >>>>>>> 510f089c13d1ddb157282f1c5b806c60227bb98f
    })
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
    return this.users;
  }

  getPotentialMatchesBySign()
  {
    return this.users;
  }

  getMatched() {

  }

  getChatLog(otherUser) {

  }
  getMatchById(userId: string)
  {
    return this.database.object('/users/'+ userId);
  }

}
