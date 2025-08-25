// // session.service.ts
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SessionService {

//   private userKey = 'loggedInUser';

//   setUser(user: any): void {
//     localStorage.setItem(this.userKey, JSON.stringify(user));
//   }

//   getUser(): any {
//     const userData = localStorage.getItem(this.userKey);
//     return userData ? JSON.parse(userData) : null;
//   }

//   removeUser(): void {
//     localStorage.removeItem(this.userKey);
//   }

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem(this.userKey);
//   }
// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userKey = 'loggedInUser';

  setUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): any {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }
}
