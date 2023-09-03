import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string = "";
  password: string = "";
  firstname: string = "";
  lastname: string = "";
  type:string[]= ["Padre","Alumno","Profesor"]
  user: any;
  

  constructor(
    public userService: UserService,
    private router: Router 
  ) {}
  
  register() {

    debugger
    this.user.email =this.email
    this.user.password=this.password

    this.userService.register(this.user).
      subscribe((data: any) => {
        console.log(data);
      }
    );
  }

  goToLogin() {
    this.router.navigate(['user/login']);
  }
}
