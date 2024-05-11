import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  handleClick = output();
  label = input.required<string>();
  type = input<'solid' | 'outlined'>('solid');

  onClick() {
    this.handleClick.emit();
  }
}
