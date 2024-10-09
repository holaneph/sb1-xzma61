import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ns-login',
  template: `
    <StackLayout>
      <Label text="Login" class="h2 text-center"></Label>
      <TextField [(ngModel)]="username" hint="Username" autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField [(ngModel)]="password" hint="Password" secure="true"></TextField>
      <Button text="Login" (tap)="onLogin()"></Button>
      <Button text="Register" (tap)="onRegister()"></Button>
    </StackLayout>
  `,
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private routerExtensions: RouterExtensions,
    private authService: AuthService
  ) {}

  onLogin() {
    const user = this.authService.login(this.username, this.password);
    if (user) {
      console.log('Login successful:', user);
      switch (user.role) {
        case 'user':
          this.routerExtensions.navigate(['/user/dashboard'], { clearHistory: true });
          break;
        case 'business':
          this.routerExtensions.navigate(['/business/dashboard'], { clearHistory: true });
          break;
        case 'admin':
          this.routerExtensions.navigate(['/admin'], { clearHistory: true });
          break;
      }
    } else {
      console.log('Login failed');
      alert('Invalid username or password. Please try again.');
    }
  }

  onRegister() {
    this.routerExtensions.navigate(['/register']);
  }
}