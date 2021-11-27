import { Component, OnInit } from '@angular/core';
import { ResponseType } from 'src/app/response';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credentials={
    username:"",
    password:""
  }

  constructor(private loginService:LoginService) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form Submitted");

    if(this.credentials.username != "" && this.credentials.password != ""){
      console.log("Submit the form");

      this.loginService.generateToken(this.credentials).subscribe(
        (response:any) =>{
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard";
          
        },
        //error part
        error=>{
          console.log(error);
        }
      ) 
      //generate token


    }
    else{
      console.log("don't submit");
    }
  }

}
