import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGeistComponent } from './main-geist.component';

describe('MainGeistComponent', () => {
  let component: MainGeistComponent;
  let fixture: ComponentFixture<MainGeistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainGeistComponent]
    });
    fixture = TestBed.createComponent(MainGeistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});