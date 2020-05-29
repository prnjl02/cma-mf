import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router , private authService:AuthService) { }


  ngOnInit(): void {
  }

  submit(loginDetails){
    console.log('loggedin',loginDetails.value);
    this.authService.loginDetails(loginDetails.value)
       this.router.navigate(['/dashboard'])
      }
}
