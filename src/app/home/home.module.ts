import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { StudentHealthComponent } from './student-health/student-health.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CommentComponent,
    CarrouselComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    StudentHealthComponent,
    
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
