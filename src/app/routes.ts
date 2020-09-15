import {Routes} from '@angular/router';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './_guards/auth.guard'

export const appRoutes : Routes = [
    { path: '', component: RegisterComponent},
    { path: 'subject', component: SubjectListComponent, canActivate: [AuthGuard]},
    { path: 'message', component: MessageListComponent, canActivate: [AuthGuard]},
    { path: 'friend', component: FriendListComponent, canActivate: [AuthGuard]},
    { path: '**',redirectTo:'', pathMatch: 'full'},
];

