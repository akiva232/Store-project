import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdetComponent } from './updet.component';

describe('UpdetComponent', () => {
  let component: UpdetComponent;
  let fixture: ComponentFixture<UpdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
