import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHorizontalComponent } from './login-horizontal.component';

describe('LoginHorizontalComponent', () => {
  let component: LoginHorizontalComponent;
  let fixture: ComponentFixture<LoginHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
