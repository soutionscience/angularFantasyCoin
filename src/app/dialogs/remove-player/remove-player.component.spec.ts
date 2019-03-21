import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlayerComponent } from './remove-player.component';

describe('RemovePlayerComponent', () => {
  let component: RemovePlayerComponent;
  let fixture: ComponentFixture<RemovePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
