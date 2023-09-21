import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public section:string = "";

  eventFromHeader(data: string) {
    this.section = data;
    // document.querySelector('#about')?.scrollIntoView();
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#about')?.scrollIntoView();
      // document.querySelector('#about').scrollIntoView();
    } catch (e) { }
  }

}
