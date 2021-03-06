import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  Error: boolean = false;
  message: string;

  constructor(private adminservice: AdminService, private formbuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(loginForm: NgForm){
    let login = loginForm.value;
    console.log(login)

    this.adminservice.LoginAdmin(loginForm.value).subscribe(data=>{
      var succ = data;
      this.Error = false;
      localStorage.setItem("loggedUser", JSON.stringify(succ));
      this.router.navigate(['/adminlanding']);

    })
    if(this.Error){
      this.message = "Wrong Credentials";
    }

  }

}
