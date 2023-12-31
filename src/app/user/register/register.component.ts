import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public email: string = "";
  public password: string = "";
  public firstname: string = "";
  public lastname: string = "";
  public typeOptions:string[]= ["Padre","Estudiante","Profesor", "Personal", "Autoridad"];
  public typeSelected: string= this.typeOptions[0];

  constructor(
    public userService: UserService,
    private router: Router 
  ) {
   
  }
  
  register() {

    this.userService.register({
      email: this.email,
      password: this.password,
      name: this.firstname,
      lastname: this.lastname,
      role: this.typeSelected,
    }).
      subscribe((data: any) => {
        console.log(data);
        this. goToLogin()

      }
    );
  }

  goToLogin() {
    this.router.navigate(['user/login']);
  }
}
