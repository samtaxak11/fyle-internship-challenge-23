import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() appTitle: string = '';
  @Input() appTheme: string = 'dark';

  @Output() themeToggled = new EventEmitter<void>();

  toggleTheme() {
    this.themeToggled.emit();
  }
}