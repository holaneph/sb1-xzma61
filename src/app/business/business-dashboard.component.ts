import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-business-dashboard',
  template: `
    <ScrollView>
      <StackLayout>
        <Label text="Business Dashboard" class="h2 text-center p-10"></Label>
        
        <!-- KPI Widget -->
        <StackLayout class="bg-blue-500 p-4 m-4 rounded-lg">
          <Label text="Total Revenue" class="text-white text-lg"></Label>
          <Label [text]="totalRevenue | currency:'USD':'symbol':'1.0-0'" class="text-white text-3xl font-bold"></Label>
        </StackLayout>
        
        <!-- Simple Circular Progress Bar -->
        <GridLayout rows="auto, auto" columns="*, *" class="m-4">
          <Label text="Revenue by Product" class="text-lg text-center p-b-4" colSpan="2"></Label>
          <GridLayout *ngFor="let product of products; let i = index" [row]="1 + Math.floor(i / 2)" [col]="i % 2" class="m-2">
            <StackLayout class="progress-wrapper">
              <Label [text]="product.percentage + '%'" class="progress-text"></Label>
            </StackLayout>
            <Label [text]="product.name" class="text-center m-t-2"></Label>
          </GridLayout>
        </GridLayout>

        <!-- Navigation Button -->
        <Button text="View Business Cards" (tap)="onViewCards()" class="btn btn-primary m-4"></Button>
      </StackLayout>
    </ScrollView>
  `,
  styles: [`
    .progress-wrapper {
      width: 100;
      height: 100;
      background-color: #f0f0f0;
      border-radius: 50%;
      overflow: hidden;
    }
    .progress-text {
      width: 100;
      height: 100;
      text-align: center;
      vertical-align: middle;
      font-size: 24;
      font-weight: bold;
    }
  `]
})
export class BusinessDashboardComponent {
  totalRevenue: number = 150000;
  products = [
    { name: "Product A", percentage: 33 },
    { name: "Product B", percentage: 20 },
    { name: "Product C", percentage: 30 },
    { name: "Product D", percentage: 17 }
  ];

  Math = Math;

  constructor(private routerExtensions: RouterExtensions) {}

  onViewCards() {
    this.routerExtensions.navigate(['/business/cards']);
  }
}