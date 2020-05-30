import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
  isLoggedIn = new Subject<boolean>();
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.isLoggedIn.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.isLoggedIn.next(true);
  }

  logout() {
    this.user = null;
    this.isLoggedIn.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
