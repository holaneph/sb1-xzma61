import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-register',
  template: `
    <StackLayout>
      <Label text="Register" class="h2 text-center"></Label>
      <TextField hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true"></TextField>
      <TextField hint="Confirm Password" secure="true"></TextField>
      <SegmentedBar [items]="userTypes" [(ngModel)]="selectedIndex"></SegmentedBar>
      <Button text="Register" (tap)="onRegister()"></Button>
    </StackLayout>
  `,
})
export class RegisterComponent {
  userTypes: Array<any>;
  selectedIndex: number;

  constructor(private routerExtensions: RouterExtensions) {
    this.userTypes = [
      { title: "Regular User" },
      { title: "Business Owner" }
    ];
    this.selectedIndex = 0;
  }

  onRegister() {
    // Implement registration logic here
    // For now, we'll just navigate to the login page
    this.routerExtensions.navigate(['/login']);
  }
}