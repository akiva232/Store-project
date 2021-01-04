import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsUpdetManegerComponent } from './items-updet-maneger.component';

describe('ItemsUpdetManegerComponent', () => {
  let component: ItemsUpdetManegerComponent;
  let fixture: ComponentFixture<ItemsUpdetManegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsUpdetManegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsUpdetManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
