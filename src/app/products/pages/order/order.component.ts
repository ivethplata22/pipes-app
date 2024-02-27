import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  changeOrder(order: string): void {

  }

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}