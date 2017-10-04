import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { HoroscopeSignPipe } from '../horoscope-sign.pipe';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtered-signs',
  templateUrl: './filtered-signs.component.html',
  styleUrls: ['./filtered-signs.component.css'],
  providers: [UserService]
})
export class FilteredSignsComponent implements OnInit {
  desiredSign: string;
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private route : ActivatedRoute, private location: Location, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.desiredSign = urlParameters['desiredSign'];
    })
    this.users = this.userService.getPotentialMatches();
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  }

  onChangeSign(optionFromSign) {
   this.desiredSign = optionFromSign;
  }

}
