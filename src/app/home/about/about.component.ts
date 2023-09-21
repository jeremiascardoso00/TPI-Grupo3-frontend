import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { 
  showDiv = {
    objetive : false,
    mission : false,
    values : false,    
  }  

}
