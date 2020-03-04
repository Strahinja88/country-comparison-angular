import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userData: any;

  constructor(public router: Router, public users: UserService) {}

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null ? true : false;
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
