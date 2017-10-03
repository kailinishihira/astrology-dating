import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser(event, photo) {
    event.preventDefault();
    console.log(event.target.elements);
    let userName = event.target.elements[0].value;
    let userPassword = event.target.elements[1].value;
    let userEmail = event.target.elements[2].value;
    let userGender = event.target.elements[3].value;
    let userInterestedIn = event.target.elements[4].value;
    let userBirthday = event.target.elements[5].value;
    let userAge = Math.floor(((Date.now() - (new Date(userBirthday)).getTime()) / 1000 / 60 / 60 / 24 / 365.25));
    let userSign = "Taurus";
    let userLocation = event.target.elements[6].value;
    let userAgeRangeMin = event.target.elements[7].value;
    let userAgeRangeMax = event.target.elements[8].value;
    let userDescription = event.target.elements[9].value;
    let userPhotos = event.target.elements[10].files;

    //calculate age based on bday instead of having them enter it,
    //same with sign

    let newUser = new User(userName, userPassword, userEmail, userGender, userInterestedIn, userBirthday, userAge, userSign, userLocation, userAgeRangeMin, userAgeRangeMax, userDescription);

    this.userService.createUser(newUser, userPhotos);
  }



}
