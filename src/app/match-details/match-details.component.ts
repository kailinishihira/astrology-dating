import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css'],
  providers: [UserService]
})
export class MatchDetailsComponent implements OnInit {
  matchId: string;
  matchToDisplay;
  constructor(private route : ActivatedRoute, private location: Location, private userService : UserService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.matchId = urlParameters['id'];
  });

  this.matchToDisplay = this.userService.getMatchById(this.matchId)
  }

}
