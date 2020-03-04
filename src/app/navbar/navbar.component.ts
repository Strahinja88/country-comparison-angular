import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isAuthenticated() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.getItem("user")).username;
      return true;
    }
    return false;
  }

  logout() {
    this.authService.logout();
  }
}
