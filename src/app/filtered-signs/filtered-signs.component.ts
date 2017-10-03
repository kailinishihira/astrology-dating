import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService } from '../user.service';
import {HoroscopeSignPipe} from '../horoscope-sign.pipe';

@Component({
  selector: 'app-filtered-signs',
  templateUrl: './filtered-signs.component.html',
  styleUrls: ['./filtered-signs.component.css'],
  providers: [UserService]
})
export class FilteredSignsComponent implements OnInit {

  desiredSign: string = "allSigns";
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
      this.users = this.userService.getPotentialMatches();
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  }

  onChangeSign(optionFromSign) {
   this.desiredSign = optionFromSign;
  }

}
