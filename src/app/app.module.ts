import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import {AuthService} from './_services/auth.service';
import {AlertifyService} from './_services/alertify.service';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { RouterModule} from '@angular/router'
import {appRoutes} from './routes';

@NgModule({
   declarations: [			
      AppComponent,
      ValueComponent,
      NavComponent,
      RegisterComponent,
      SubjectListComponent,
      FriendListComponent,
      MessageListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
