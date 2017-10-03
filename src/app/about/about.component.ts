import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { UserService } from '../user.service';
// import { FilteredSignsComponent } from '../filtered-signs/filtered-signs.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [UserService]
})
export class AboutComponent implements OnInit {
desiredSign: string;
users: FirebaseListObservable<any[]>;
  constructor(private router : Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getPotentialMatchesBySign();
  }

  onClickingSign(optionFromSign) {
   this.desiredSign = optionFromSign;
   this.router.navigate(['filtered-signs'],this.desiredSign);
   console.log(this.desiredSign);
  }
}
