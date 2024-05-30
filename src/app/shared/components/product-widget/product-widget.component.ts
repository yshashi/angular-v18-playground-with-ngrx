import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  standalone: true,
  imports: [],
  templateUrl: './product-widget.component.html',
  styleUrl: './product-widget.component.scss'
})
export class ProductWidgetComponent {
  productData = input.required<ProductWidget[]>();
}

export type ProductWidget = {
  imageUrl: string;
  title: string;
}
