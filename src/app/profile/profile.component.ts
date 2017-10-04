import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  @Input() selectedUser;
  user;
  userEmail;
  returnedUser;
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private afAuth: AngularFireAuth, private router : Router, private userService: UserService) {
    this.user = this.afAuth.auth.currentUser;
    this.userEmail = this.user.email;
  }
  ngOnInit() {
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

  updateThisUser(userToUpdate){
    this.userService.updateProfile(userToUpdate);
  }

  deleteThisUser(userToDelete){
    if(confirm("Are you sure you want to delete your profile?")){
      this.userService.deleteProfile(userToDelete);
    }
  }
}
