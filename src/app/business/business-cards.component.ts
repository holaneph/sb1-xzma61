import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-business-cards',
  template: `
    <StackLayout>
      <Label text="Business Cards" class="h2 text-center"></Label>
      <ListView [items]="cards">
        <ng-template let-card="item">
          <StackLayout class="card m-2 p-2">
            <Label [text]="card.name" class="h3"></Label>
            <Label [text]="'Card Number: ' + card.number"></Label>
            <Label [text]="'Expiry: ' + card.expiry"></Label>
          </StackLayout>
        </ng-template>
      </ListView>
      <Button text="Back to Dashboard" (tap)="onBackToDashboard()" class="btn btn-primary m-4"></Button>
    </StackLayout>
  `,
  styles: [`
    .card {
      background-color: #f0f0f0;
      border-radius: 10;
    }
  `]
})
export class BusinessCardsComponent {
  cards = [
    { name: 'Business Visa', number: '**** **** **** 1234', expiry: '12/25' },
    { name: 'Corporate Amex', number: '**** ****** 98765', expiry: '06/24' },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  onBackToDashboard() {
    this.routerExtensions.back();
  }
}