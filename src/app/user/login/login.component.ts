import { Component,OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(public userService: UserService) {}

  ngOnInit(): void {
  }


  login() {
    debugger
    const user = { email: this.email, password: this.password };
    this.userService.login(user).
      subscribe((data: any) => {
        console.log(data);
      }
    );
  }
}
