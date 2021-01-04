import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirts1Component } from './shirts1.component';

describe('Shirts1Component', () => {
  let component: Shirts1Component;
  let fixture: ComponentFixture<Shirts1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shirts1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shirts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
