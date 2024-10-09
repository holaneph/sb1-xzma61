import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  role: 'user' | 'business' | 'admin';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'user1', role: 'user' },
    { username: 'user2', role: 'user' },
    { username: 'business1', role: 'business' },
    { username: 'business2', role: 'business' },
    { username: 'admin', role: 'admin' }
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  userState$ = this.currentUserSubject.asObservable();

  constructor() { }

  login(username: string, password: string): User | null {
    // For simplicity, we're not checking the password
    const user = this.users.find(user => user.username === username.toLowerCase());
    if (user) {
      this.currentUserSubject.next(user);
    }
    return user || null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}