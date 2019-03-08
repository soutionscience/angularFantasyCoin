import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockMetamaskComponent } from './unlock-metamask.component';

describe('UnlockMetamaskComponent', () => {
  let component: UnlockMetamaskComponent;
  let fixture: ComponentFixture<UnlockMetamaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockMetamaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockMetamaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
