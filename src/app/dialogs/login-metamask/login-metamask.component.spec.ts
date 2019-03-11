import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMetamaskComponent } from './login-metamask.component';

describe('LoginMetamaskComponent', () => {
  let component: LoginMetamaskComponent;
  let fixture: ComponentFixture<LoginMetamaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMetamaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMetamaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
