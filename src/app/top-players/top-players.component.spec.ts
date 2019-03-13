import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPLayersComponent } from './top-players.component';

describe('TopPLayersComponent', () => {
  let component: TopPLayersComponent;
  let fixture: ComponentFixture<TopPLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
