import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  returnedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logIn(event) {
    event.preventDefault();

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
