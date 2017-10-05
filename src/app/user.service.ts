import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import * as firebaseStorage from 'firebase/storage';
import { Router } from '@angular/router';
import { User } from './user.model';
import { FirebaseApp } from 'angularfire2';
import {ElementPipe} from './element.pipe';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;
  errorMessage: string = '';
  users: FirebaseListObservable<any[]>;
  newUser;

  constructor(private storage: FirebaseApp, public afAuth: AngularFireAuth, private router: Router, private database: AngularFireDatabase)
  {
    this.user = afAuth.authState;
    this.users = database.list('users')
  }
  //wish list - user verification email
  //interested in, age, age range, location, gender, bday, email, username, photo
  createUser(inputUser: User, photos: FileList) {
    event.preventDefault();

    this.afAuth.auth.createUserWithEmailAndPassword(inputUser.email, inputUser.password).then((user) => {
      inputUser.userId = user.uid;
      this.database.list('users').push(inputUser);
      for (let i = 0; i < photos.length; i++) {
        let imageRef = this.storage.storage().ref().child(`images/${this.afAuth.auth.currentUser.uid}`);
        imageRef.put(photos[i]).then(() => {
        }).catch((error) => {
          console.log(error.message);
          this.errorMessage = error.message;
        })
      }
        this.router.navigate(['/']);
    })
  }

  // listAllUsers(nextPageToken) {
  //   // List batch of users, 100 at a time.
  //   admin.auth().listUsers(100, nextPageToken)
  //     .then((listUsersResult)  => {
  //       listUsersResult.users.forEach((userRecord)  =>  {
  //         console.log("user", userRecord.toJSON());
  //       });
  //       if (listUsersResult.pageToken) {
  //         // List next batch of users.
  //         this.listAllUsers(listUsersResult.pageToken)
  //       }
  //     })
  //     .catch(function(error) {
  //       console.log("Error listing users:", error)
  //     })
  // }

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

  getPotentialMatches(){
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

  getUserByEmail(givenEmail: string){
    let newUserList = this.database.list('/users');

    this.newUser = newUserList;
    // .subscribe(dataLastEmittedFrom => {
    //   this.newUser = dataLastEmittedFrom;
    //   console.log(this.newUser);
      // return this.newUser;
    // });
}


  //   (data => {
  //     data.forEach((currentUser) => {
  //       if(currentUser.email == givenEmail) {
  //
  //         this.newUser = new User(currentUser.username, currentUser.password, currentUser.email, currentUser.gender, currentUser.interestedIn, currentUser.birthday, currentUser.age, currentUser.sign, currentUser.location, currentUser.ageRangeMin, currentUser.ageRangeMax, currentUser.description);
  //         console.log(this.newUser);
  //         return this.newUser;
  //
  //       }
  //     })
  //   });
  // }

  getMatchById(userId: string)
  {
    return this.database.object('/users/'+ userId);
  }


  updateProfile(updateUser){
    // var userEntryInFirebase = this.getUserByEmail(updateUser.email);
    // userEntryInFirebase.update({
    //   age: userEntryInFirebase.age;
    // })
  }


  deleteProfile(deleteUser){
    // var userEntryInFirebase = this.getUserByEmail(deleteUser.$key);
    // userEntryInFirebase.remove();
  }


}
