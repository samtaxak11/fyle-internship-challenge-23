import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Developer } from './models/Developer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  // Application title
  appTitle: string = 'GitUsers';

  // Application theme (initially set to dark)
  appTheme: string = 'dark';

  // Current year for the footer
  currentYear: number = new Date().getFullYear();

  // Developer information
  developer: Developer = {
    name: 'SahilK-027',
    githubUrl: 'https://github.com/SahilK-027',
  };

  // EventEmitter for notifying theme changes to parent components
  @Output() themeChanged = new EventEmitter<string>();

  /**
   * @brief Initializes the component and emits the initial theme to parent components.
   * @params None
   * @returns None
   */
  ngOnInit(): void {
    this.themeChanged.emit(this.appTheme);
  }

  /**
   * @brief Toggles between light and dark themes, updates the body class, and emits the new theme to parent components.
   * @params None
   * @returns None
   */
  toggleTheme(): void {
    // Remove the current theme class from the body
    document.body.classList.remove(this.appTheme);

    // Toggle between 'dark' and 'light' themes
    this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';

    // Add the updated theme class to the body
    document.body.classList.add(this.appTheme);

    // Emit the updated theme to parent components
    this.themeChanged.emit(this.appTheme);
  }
}
