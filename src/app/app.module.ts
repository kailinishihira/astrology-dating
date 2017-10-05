import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MatchedWithComponent } from './matched-with/matched-with.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenderPipe } from './gender.pipe';
import { AgePipe } from './age.pipe';
import { HoroscopeSignPipe } from './horoscope-sign.pipe';
import { MatchListComponent } from './match-list/match-list.component';
import 'firebase/storage';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { FilteredSignsComponent } from './filtered-signs/filtered-signs.component';
import { ElementPipe } from './element.pipe';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    MatchedWithComponent,
    ProfileComponent,
    MatchDetailsComponent,
    ChatComponent,
    NavbarComponent,
    GenderPipe,
    AgePipe,
    HoroscopeSignPipe,
    MatchListComponent,
    FileDropDirective,
    FileSelectDirective,
    FilteredSignsComponent,
    ElementPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
