import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { FilteredSignsComponent } from './filtered-signs/filtered-signs.component';
import { LoginComponent } from './login/login.component';
import { StartMatchesComponent } from './start-matches/start-matches.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'users/:id',
    component: MatchDetailsComponent
  },
  {
    path: 'filtered-signs',
    component: FilteredSignsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'start-matches',
    component: StartMatchesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
