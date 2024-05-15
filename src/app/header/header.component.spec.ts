import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the application title in the template', () => {
    component.appTitle = 'GitUsers';
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('GitUsers');
  });

  it('should have the theme toggle button', () => {
    const compiled = fixture.nativeElement;
    const themeToggle = compiled.querySelector('.select-none');
    expect(themeToggle).toBeTruthy();
  });

  it('should have a moon icon when the theme is light', () => {
    component.appTheme = 'light';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const moonIcon = compiled.querySelector('.fa-moon');
    expect(moonIcon).toBeTruthy();
  });

  it('should have a sun icon when the theme is dark', () => {
    component.appTheme = 'dark';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const sunIcon = compiled.querySelector('.fa-sun');
    expect(sunIcon).toBeTruthy();
  });

  it('should emit toggleTheme event when theme button is clicked', () => {
    spyOn(component.themeToggled, 'emit');
    const compiled = fixture.nativeElement;
    const themeToggle = compiled.querySelector('.select-none');
    themeToggle.click();
    expect(component.themeToggled.emit).toHaveBeenCalled();
  });
});