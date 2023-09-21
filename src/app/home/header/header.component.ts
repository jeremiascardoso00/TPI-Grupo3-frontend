import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  @Output() sendDataToParent = new EventEmitter<string>();

  _sendDataToParent(data:string) {
    this.sendDataToParent.emit(data);
  }

}
