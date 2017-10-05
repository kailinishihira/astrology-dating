import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as firebaseStorage from 'firebase/storage';
import { FirebaseApp } from 'angularfire2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  photoUrl;
  user;
  userEmail;
  returnedUser;
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  showEditForm: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router, private userService: UserService, private storage: FirebaseApp) {
    this.afAuth.auth.onAuthStateChanged((myUser) =>{
    if (myUser) {
      this.user = myUser;
      this.userEmail = this.user.email;
      console.log(this.userEmail);
      let imageRef = this.storage.storage().ref().child(`images/${myUser.uid}`)
      imageRef.getDownloadURL().then((url) => {
        this.photoUrl = url;
      });
    } else {
      this.router.navigate(['login']);
      }
    });
  }

  ngOnInit() {
    this.findUser();
  }

  editForm(){
    this.showEditForm = true;
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
