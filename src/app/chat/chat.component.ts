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
  matchChat = null;
  globalChatLog = ['---'];
  firebaseUser;

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
    },1500)
  }

  openChat(match) {
    this.matchChat = null;
    this.matchChat = match;
  }

  // var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
  //   albumEntryInFirebase.update({
  //     title: localUpdatedAlbum.title,
  //     artist: localUpdatedAlbum.artist,
  //     description: localUpdatedAlbum.description
  //   });
  // }


  sendMessage(event) {
    event.preventDefault();
    this.userObject.chatLog.push(event.target.elements[0].value);
    this.matchChat.chatLog.push(event.target.elements[0].value);
    event.target.elements[0].value = '';
    this.globalChatLog = this.userObject.chatLog;

    this.firebaseUser = this.afAuth.auth.currentUser;
    console.log(this.user);
    console.log(this.firebaseUser);
    console.log(this.userObject.chatLog);
    this.user.update({
      chatLog: this.userObject.chatLog
    });


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
