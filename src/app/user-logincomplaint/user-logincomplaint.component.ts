import { Component } from '@angular/core';

@Component({
  selector: 'app-user-logincomplaint',
  templateUrl: './user-logincomplaint.component.html',
  styleUrls: ['./user-logincomplaint.component.css']
})
export class UserLogincomplaintComponent {
  email=""
  password=""
  readValue=()=>
  {
    let data:any= {
      "email":this.email,"password":this.password
    }
    console.log(data)
  }
}