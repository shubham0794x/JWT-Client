import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  UserName:string;
  constructor(private userService:UserService) {
    this.UserName = "";
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.getUser().subscribe(
      (user:any)=>{ 
        console.log(user);
        this.UserName = user.name;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
