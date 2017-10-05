import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as firebaseStorage from 'firebase/storage';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [UserService]
})
export class ChatComponent implements OnInit {
  user;
  userObject;
  matchedList:string[] = [];
  matchedListObservable: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private userService: UserService, private database: AngularFireDatabase, private storage: FirebaseApp) {
    this.afAuth.auth.onAuthStateChanged((myUser) => {
      this.user = myUser;
      this.findUser();
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.userObject.matches.forEach((match) => {
        this.userService.getUserByEmail(match.email);
        this.userService.newUser.subscribe(data => {
          data.forEach(myUser => {
            if (myUser.email === match) {
              this.matchedList.push(myUser);
            }
          })
        })
      })
      this.matchedListObservable = this.userService.newUser;
    },2000)
  }

  findUser() {
    this.userService.getUserByEmail(this.user.email);
    this.userService.newUser.subscribe(data => {
      data.forEach(myUser => {
        if (myUser.email === this.user.email) {
          this.userObject = myUser;
        }
      })
    });
  }

}
