import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CarrouselComponent } from './carrousel/carrousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    CommentComponent,
    CarrouselComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ]
})
export class HomeModule { }
