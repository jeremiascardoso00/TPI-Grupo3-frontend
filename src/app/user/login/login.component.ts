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

  public email: string = "";
  public password: string = "";
 
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  login() {
    this.userService.login({
      email:this.email,
      password:this.password
    }).
      subscribe((data: any) => {
        console.log(data.user);
        localStorage.setItem("loggedUser", JSON.stringify( {
          id: data.user._id,
          email: data.user.email,
          password: data.user.password,
          name: data.user.name,
          lastname: data.user.lastname,
          role: data.user.role
        } as User))
        localStorage.setItem("bearer", data.data)
        this.goToHome()
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
