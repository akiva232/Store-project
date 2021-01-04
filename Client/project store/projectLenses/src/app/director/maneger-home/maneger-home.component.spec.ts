import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegerHomeComponent } from './maneger-home.component';

describe('ManegerHomeComponent', () => {
  let component: ManegerHomeComponent;
  let fixture: ComponentFixture<ManegerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManegerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
