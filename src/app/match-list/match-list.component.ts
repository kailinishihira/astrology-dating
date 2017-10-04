import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  providers: [UserService]
})

export class MatchListComponent implements OnInit {
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

  constructor(private afAuth: AngularFireAuth, private router : Router, private userService: UserService, private database: AngularFireDatabase) {
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
    this.userService.getPotentialMatches().subscribe((userList) => {
      this.users = userList;
      this.currentPotentialMatch = this.users[this.currentPotentialMatchIndex];
    });

  }

  like(likedUser) {
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
}
