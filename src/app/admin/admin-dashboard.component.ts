import { Component } from '@angular/core';

@Component({
  selector: 'ns-admin-dashboard',
  template: `
    <StackLayout>
      <Label text="Admin Dashboard" class="h2 text-center"></Label>
      <Label text="User Activity"></Label>
      <!-- Add user activity list here -->
      <Label text="Business Owner Registrations"></Label>
      <!-- Add business owner registration approval list here -->
    </StackLayout>
  `,
})
export class AdminDashboardComponent {}