import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { StudentHealthComponent } from './student-health/student-health.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', 
        component: CarrouselComponent, 
      },
      {
        path: 'about', 
        component: AboutComponent,
      },
      {
        path: 'news',
        component: NewsComponent, 
      },
      {
        path: 'student-health',
        component: StudentHealthComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
