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
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private afAuth: AngularFireAuth, private router : Router, private userService: UserService) {
    this.user = this.afAuth.auth.currentUser;
    if(this.user) {
      this.userEmail = this.user.email;
      console.log(this.userEmail);
    }
  }

  ngOnInit() {
    this.findUser();
    this.users = this.userService.getPotentialMatches();
    console.log(this.returnedUser);
    setTimeout(() => {
      console.log(this.returnedUser);
    }, 3000)
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
          console.log(this.returnedUser);
        }
      })
    });
  }
}
