import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
  ],
  providers: [UserService],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
