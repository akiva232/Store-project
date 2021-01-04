import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegerUsersComponent } from './maneger-users.component';

describe('ManegerUsersComponent', () => {
  let component: ManegerUsersComponent;
  let fixture: ComponentFixture<ManegerUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManegerUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
