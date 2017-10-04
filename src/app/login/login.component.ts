import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private router: Router, private afAuth: AngularFireAuth, private userService: UserService) { }

  ngOnInit() {
  }

  logIn(event) {
    event.preventDefault();

    let userName = event.target.elements[0].value;
    let password = event.target.elements[1].values;

    this.afAuth.auth.signInWithEmailAndPassword(userName, password).then(() => {
      this.errorMessage = '';
      this.router.navigate(['/']);
    }).catch((error) => {
      this.errorMessage = error.message;
      console.log(this.errorMessage);
    })
  }

  // private afAuth: AngularFireAuth
  // this.user = this.afAuth.authState;
  //
  // findUser() {
  //   this.userService.getUserByEmail(user.email);
  //   this.userService.newUser.subscribe(data => {
  //     data.forEach(myUser => {
  //       if (myUser.email === "lois@gmail.com") {
  //         this.returnedUser = myUser;
  //
  //       }
  //     })
  //   });
  // }


}
