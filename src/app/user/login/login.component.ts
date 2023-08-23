import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(public userService: UserService) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).
      subscribe((data: any) => {
        console.log(data);
      }
    );
  }
}
