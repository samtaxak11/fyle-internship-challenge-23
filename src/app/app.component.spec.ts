// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainGeistComponent } from './main-geist/main-geist.component';
import { FooterComponent } from './footer/footer.component';
import { UserInputComponent } from './main-geist/user-input/user-input.component';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        MainGeistComponent,
        FooterComponent,
        UserInputComponent,
        NgxSkeletonLoaderComponent,
      ],
      imports: [HttpClientModule, FormsModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial theme to dark', () => {
    expect(component.appTheme).toBe('dark');
  });

  it('should toggle theme correctly', () => {
    spyOn(component.themeChanged, 'emit');

    // Initial theme is dark
    component.toggleTheme();
    expect(component.appTheme).toBe('light');
    expect(component.themeChanged.emit).toHaveBeenCalledWith('light');

    // Toggle back to dark
    component.toggleTheme();
    expect(component.appTheme).toBe('dark');
    expect(component.themeChanged.emit).toHaveBeenCalledWith('dark');
  });

  it('should emit theme changes on ngOnInit', () => {
    spyOn(component.themeChanged, 'emit');
    component.ngOnInit();
    expect(component.themeChanged.emit).toHaveBeenCalledWith('dark');
  });

  it('should emit theme changes when toggleTheme is called', () => {
    spyOn(component.themeChanged, 'emit');

    // Initial theme is dark
    component.toggleTheme();
    expect(component.themeChanged.emit).toHaveBeenCalledWith('light');

    // Toggle back to dark
    component.toggleTheme();
    expect(component.themeChanged.emit).toHaveBeenCalledWith('dark');
  });

  it('should update body class when toggleTheme is called', () => {
    spyOn(document.body.classList, 'remove');
    spyOn(document.body.classList, 'add');

    // Initial theme is dark
    component.toggleTheme();
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark');
    expect(document.body.classList.add).toHaveBeenCalledWith('light');

    // Toggle back to dark
    component.toggleTheme();
    expect(document.body.classList.remove).toHaveBeenCalledWith('light');
    expect(document.body.classList.add).toHaveBeenCalledWith('dark');
  });

  it('should have appTitle in the template', () => {
    component.appTitle = 'GitUsers';
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header').textContent).toContain(
      'GitUsers'
    );
  });
});