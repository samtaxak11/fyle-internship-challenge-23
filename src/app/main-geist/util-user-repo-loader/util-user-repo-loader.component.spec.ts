import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilUserRepoLoaderComponent } from './util-user-repo-loader.component';

describe('UtilUserRepoLoaderComponent', () => {
  let component: UtilUserRepoLoaderComponent;
  let fixture: ComponentFixture<UtilUserRepoLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilUserRepoLoaderComponent]
    });
    fixture = TestBed.createComponent(UtilUserRepoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});