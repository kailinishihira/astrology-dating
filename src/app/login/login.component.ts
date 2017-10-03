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

  findUser() {
    this.returnedUser = this.userService.getUserByEmail("lois@gmail.com");
    console.log(this.returnedUser);
  }

}
