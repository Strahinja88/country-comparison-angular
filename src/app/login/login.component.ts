import { UsernameValidators } from "./username.validators";
import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUser: Object;
  submitted: boolean = false;

  constructor(private user: UserService, private router: Router) {}

  profileForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ])
  });

  ngOnInit(): void {}

  get username() {
    return this.profileForm.get("username");
  }

  get password() {
    return this.profileForm.get("password");
  }

  login() {
    this.submitted = true;

    this.loginUser = {
      username: this.username.value,
      password: this.password.value
    };

    if (this.profileForm.valid) {
      this.user.getUsers().subscribe(user => {
        if (
          user.username === this.username.value &&
          user.password === this.password.value
        ) {
          localStorage.setItem("user", JSON.stringify(this.loginUser));
          this.router.navigate(["dashboard"]);
        } else if (user.username !== this.username.value) {
          this.profileForm.controls.username.setErrors({ username: true });
        } else if (user.password !== this.password.value) {
          this.profileForm.controls.password.setErrors({ password: true });
        }
      });
    }
  }
}
