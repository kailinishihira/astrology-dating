import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-start-matches',
  templateUrl: './start-matches.component.html',
  styleUrls: ['./start-matches.component.css'],
  providers: [UserService]
})
export class StartMatchesComponent implements OnInit {
  sign: string = "";
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router : Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getPotentialMatches();
  }

  goToDetailPage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  }
}
