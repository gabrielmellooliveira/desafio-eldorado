import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth from 'src/app/models/Auth';
import IResponse from 'src/app/models/IResponse';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void { }

  onLogin(): void {
    this.loginService.auth(this.username, this.password).subscribe((response: IResponse<Auth>) => {
      const token = response.content.token

      if (token) {
        localStorage.setItem('token', token)
        this.router.navigate(['/home'])
      }
    })
  }
}
