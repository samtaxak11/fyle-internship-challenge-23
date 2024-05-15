import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilUserProfileLoaderComponent } from './util-user-profile-loader.component';

describe('UtilUserProfileLoaderComponent', () => {
  let component: UtilUserProfileLoaderComponent;
  let fixture: ComponentFixture<UtilUserProfileLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilUserProfileLoaderComponent]
    });
    fixture = TestBed.createComponent(UtilUserProfileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});