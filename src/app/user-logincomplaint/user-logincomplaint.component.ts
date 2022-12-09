import { Component } from '@angular/core';

@Component({
  selector: 'app-user-logincomplaint',
  templateUrl: './user-logincomplaint.component.html',
  styleUrls: ['./user-logincomplaint.component.css']
})
export class UserLogincomplaintComponent {
  email=""
  password=""
  
  readValue = ()=>{
    let data:any = {
      "email":this.email,
      "password":this.password
    }
    this.api.userLogin(data).subscribe(
      (response:any) =>{
        if(response.status == "success"){
          localStorage.setItem("userInfo",response.userId)
        }else{
          alert("login failed")
        }
      }
    )
  }
}