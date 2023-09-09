import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TPI-Grupo3-frontend';

  constructor(){
    localStorage.setItem("loggedUser", JSON.stringify( {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      role: 'Anónimo'
    }as User));
  }
}
