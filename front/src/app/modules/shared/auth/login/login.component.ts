import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

class Result {
  access_token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  loginGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.authService
      .login(this.loginGroup.value.username, this.loginGroup.value.password)
      .subscribe(
        (result: Result) => {
          localStorage.setItem('access_token', result.access_token);
          this.router.navigate(['/']);
        },
        (err) => {}
      );
  }
}
