import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-admin-logincomplaint',
  templateUrl: './admin-logincomplaint.component.html',
  styleUrls: ['./admin-logincomplaint.component.css']
})
export class AdminLogincomplaintComponent {
  username=""
  password=""
  constructor(private route:Router){}
    readValue=()=>
    {
      let data:any={
  
        "username":this.username,"password":this.password
      }
      console.log(data)
  
      if (this.username=="admin"&& this.password=="12345") {
        this.route.navigate(["/dashboard"])
      } else {
          alert("invalid credentials")
      }
    }
  
}