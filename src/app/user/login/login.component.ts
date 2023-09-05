import { Component,OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  user: any;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  login() {
    debugger
    this.user.email =this.email
    this.user.password=this.password

    this.userService.login(this.user).
      subscribe((data: any) => {
        console.log(data);
      }
    );
  }

  goToRegister() {
    this.router.navigate(['user/register']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
