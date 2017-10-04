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
  users;
  currentRoute: string = this.router.url;
  currentPotentialMatch;
  currentPotentialMatchIndex: number = 1;

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
      console.log(userList);
      this.users = userList;
      this.currentPotentialMatch = this.users[0];
    });

  }

  like(likedUser) {
    this.currentPotentialMatch = this.users[this.currentPotentialMatchIndex++];
    this.returnedUser.likes.push(likedUser.email);
    //need logic to check if other person liked them

    for(let i = 0; i < this.currentPotentialMatch.likes.length; i++) {
      if (this.currentPotentialMatch.likes[i] == this.returnedUser.email) {
        alert("It's a match!");
      }
    }

    //----------------------------------------------

    this.database.object('users/' + this.returnedUserId)
    .update({
      likes: this.returnedUser.likes
    });
  }

  dislike(dislikedUser) {
    this.currentPotentialMatch = this.users[this.currentPotentialMatchIndex++];
    this.returnedUser.dislikes.push(dislikedUser.email);
    //need logic to check if other person liked them

    //----------------------------------------------

    this.database.object('users/' + this.returnedUserId)
    .update({
      dislikes: this.returnedUser.dislikes
    });
  }

  match() {

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
