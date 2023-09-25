import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{

  @Input() section: string | undefined;
  public showDiv = { 
    about: true,   
    objetive : false,
    mission : false,
    values : false, 
    initialLevel : false,
    primaryLevel : false,
    secondaryLevel : false,   
  }  
  ngOnChanges(changes: SimpleChanges) {
       debugger 
    this.showDivSelector(changes['section'].currentValue);
  
  }

  showDivSelector(section: string) {
    switch(section) {
      case "about":
        this.showDiv  = { 
          about: true,   
          objetive : false,
          mission : false,
          values : false,
          initialLevel : false,
          primaryLevel : false,
          secondaryLevel : false,    
        } 
        break;
      case "level":
        this.showDiv  = { 
          about: false,   
          objetive : false,
          mission : false,
          values : false,
          initialLevel : false,
          primaryLevel : false,
          secondaryLevel : false,    
        } 
        break;
    }
  }



}
