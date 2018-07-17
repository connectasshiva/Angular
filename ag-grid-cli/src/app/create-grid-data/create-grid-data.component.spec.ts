import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGridDataComponent } from './create-grid-data.component';

describe('CreateGridDataComponent', () => {
  let component: CreateGridDataComponent;
  let fixture: ComponentFixture<CreateGridDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGridDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGridDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
