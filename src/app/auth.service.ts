import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userData: any;

  constructor(public router: Router, public users: UserService) {
    // Setting logged in user in localstorage else null
    // this.users.getUsers().subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem("user", JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem("user"));
    //   } else {
    //     localStorage.setItem("user", null);
    //     JSON.parse(localStorage.getItem("user"));
    //   }
    // });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null ? true : false;
  }

  // Sign out
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
