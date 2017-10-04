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
    let userSign = this.calculateSign(userBirthday);
    console.log(userSign);
    let userElement = "Earth";
    let userLocation = event.target.elements[6].value;
    let userAgeRangeMin = event.target.elements[7].value;
    let userAgeRangeMax = event.target.elements[8].value;
    let userDescription = event.target.elements[9].value;
    let userPhotos = event.target.elements[10].files;

    //calculate age based on bday instead of having them enter it,
    //same with sign
    let newUser = new User(userName, userPassword, userEmail, userGender, userInterestedIn, userBirthday, userAge, userSign, userElement, userLocation, userAgeRangeMin, userAgeRangeMax, userDescription);

    this.userService.createUser(newUser, userPhotos);
  }
  calculateSign(userBirthday): string
 {
   let date = new Date(userBirthday);
   let month = date.getUTCMonth()+1;
   let day = date.getUTCDate();
   let sign: string;
   if( (( month === 3 ) && (day >= 21 && day <= 31)) || (( month === 4) && (day >=1 && day <= 19)))
   sign = "Aries";
   else if( (( month === 4) && (day >= 20 && day <= 30)) || (( month === 5) && (day >=1 && day <= 21)))
   sign = "Taurus";
   else if( (( month === 5) && (day >= 21 && day <= 31)) || (( month === 6) && (day >= 1 && day <= 21)))
   sign = "Gemini";
   else if( (( month === 6) && (day >= 22 && day <= 31)) || (( month === 7) && (day >= 1 && day <= 22)))
   sign = "Cancer";
   else if( (( month === 7) && (day >= 23 && day <= 31)) || (( month === 8) && (day >= 1 && day <= 22)))
   sign = "Leo";
   else if( (( month === 8) && (day >= 23 && day <= 31)) || (( month === 9) && (day >= 1 && day <= 22)))
   sign = "Virgo";
   else if( (( month === 9) && (day >= 23 && day <= 31)) || (( month === 10) && (day >= 1 && day <= 22)))
   sign = "Libra";
   else if( (( month === 10) && (day >= 23 && day <= 31)) || (( month === 11) && (day >= 1 && day <= 22)))
   sign = "Scoprio";
   else if( (( month === 11) && (day >= 23 && day <= 31)) || (( month === 12) && (day >= 1 && day <= 21)))
   sign = "Sagittarius";
   else if( (( month === 12) && (day >= 22 && day <= 31)) || (( month === 1) && (day >= 1 && day <= 20)))
   sign = "Capricorn";
   else if( (( month === 1) && (day >= 21 && day <= 31)) || (( month === 2) && (day >= 1 && day <= 19)))
   sign = "Aquarius";
   else if( (( month === 2) && (day >= 20 && day <= 31)) || (( month === 3) && (day >= 1 && day <= 20)))
   sign = "Pisces";
   return sign;
 }
}
