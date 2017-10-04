import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
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
  users;
  currentRoute: string = this.router.url;
  currentPotentialMatch;
  currentPotentialMatchIndex: number = 1;

  constructor(private afAuth: AngularFireAuth, private router : Router, private userService: UserService) {
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
        }
      })
    });
  }
}
