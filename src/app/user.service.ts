import { USER } from "./valid-user";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User> {
    return of(USER);
  }
}
