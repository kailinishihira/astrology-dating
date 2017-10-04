import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
  user;
  userEmail;
  userObject: User;
  returnedUser;
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private afAuth: AngularFireAuth, private router : Router, private userService: UserService) {
    this.afAuth.auth.onAuthStateChanged((myUser) =>{
    if (myUser) {
      this.user = myUser;
      this.userEmail = this.user.email;
    }
    else {
      this.router.navigate(['login']);
      }
    });
  }

  ngOnInit() {
    this.findUser();
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

  logout(){
    this.userService.logout();
  }
}
