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
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  providers: [UserService]
})

export class MatchListComponent implements OnInit {
  photoUrl;
  user;
  userEmail;
  userObject: User;
  returnedUser;
  returnedUserId: string;
  likedUserId: string;
  users;
  currentRoute: string = this.router.url;
  currentPotentialMatch;
  currentPotentialMatchIndex: number = 0;
  showMatchForm: boolean = false;
  matchedPerson;

  constructor(private afAuth: AngularFireAuth, private router: Router, private userService: UserService, private database: AngularFireDatabase, private storage: FirebaseApp) {
    this.afAuth.auth.onAuthStateChanged((myUser) =>{
    if (myUser) {
      this.user = myUser;
      this.userEmail = this.user.email;
    } else {
      this.router.navigate(['login']);
      }
    });
  }

  ngOnInit() {
    this.findUser();
    setTimeout(()=>{
      this.userService.getPotentialMatches().subscribe((userList) => {
        this.users = this.filterUsers(userList);
        this.currentPotentialMatch = this.users[this.currentPotentialMatchIndex];

        let imageRef = this.storage.storage().ref().child(`images/${this.currentPotentialMatch.userId}`)
        imageRef.getDownloadURL().then((url) => {
          this.photoUrl = url;
        });
      });
    },1500);
  }

  findUser() {
    this.userService.getUserByEmail(this.userEmail);
    this.userService.newUser.subscribe(data => {
      data.forEach(myUser => {
        if (myUser.email === this.userEmail) {
          this.returnedUser = myUser;
          this.returnedUserId = myUser.$key;
        }
      })
    });
  }

  filterUsers(users){
    let filteredUsers = [];
      for(let j=0; j<users.length; j++){
        if(users[j].email === this.returnedUser.email){
          continue;
        }
        // console.log(users[j].email);
        // console.log(this.returnedUser.likes);
        // console.log(this.returnedUser.dislikes);
        // console.log(!this.returnedUser.likes.includes(users[j].email));
        if((users[j].interestedIn === "both" || users[j].interestedIn === this.returnedUser.gender) && (this.returnedUser.interestedIn === users[j].gender || this.returnedUser.interestedIn === "both") &&

        (users[j].ageRangeMin < this.returnedUser.age && users[j].ageRangeMax > this.returnedUser.age) && (this.returnedUser.ageRangeMin < users[j].age && this.returnedUser.ageRangeMax > users[j].age) &&

        (users[j].element === this.returnedUser.element) &&
        !((this.returnedUser.likes.includes(users[j].email)) || (this.returnedUser.dislikes.includes(users[j].email)))
        )
        {
          filteredUsers.push(users[j]);
        }
      }
      return filteredUsers;
    }

  like(likedUser) {
    this.matchedPerson = likedUser;
    this.currentPotentialMatch = this.users[this.currentPotentialMatchIndex++];
    this.returnedUser.likes.push(likedUser.email);

    //checking to see if they also like you
    for(let i = 0; i < likedUser.likes.length; i++) {
      if (likedUser.likes[i] == this.returnedUser.email) {
        this.showMatchForm = true;
        //if both like each other add to matched list
        this.returnedUser.matches.push(likedUser.email);
        this.database.object('users/' + this.returnedUserId)
        .update({
          matches: this.returnedUser.matches
        });

        //pushing ourselves to the liked user's matches array
        likedUser.matches.push(this.returnedUser.email);

        //finding likedUser in database
        this.userService.getUserByEmail(likedUser.email);
        this.userService.newUser.subscribe(data => {
          data.forEach(myUser => {
            if (myUser.email === likedUser.email) {
              this.likedUserId = myUser.$key;
            }
          })
        });

        //updating database matches array with local likeduser matches array
        this.database.object('users/' + this.likedUserId)
        .update({
          matches: likedUser.matches
        })
      }
    }


    this.database.object('users/' + this.returnedUserId)
    .update({
      likes: this.returnedUser.likes
    });
  }

  dislike(dislikedUser) {
    this.currentPotentialMatch = this.users[this.currentPotentialMatchIndex++];
    this.returnedUser.dislikes.push(dislikedUser.email);

    this.database.object('users/' + this.returnedUserId)
    .update({
      dislikes: this.returnedUser.dislikes
    });
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  }

  close() {
    this.showMatchForm = false;
  }



}
