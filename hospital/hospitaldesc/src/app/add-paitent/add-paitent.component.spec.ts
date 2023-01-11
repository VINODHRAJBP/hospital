import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaitentComponent } from './add-paitent.component';

describe('AddPaitentComponent', () => {
  let component: AddPaitentComponent;
  let fixture: ComponentFixture<AddPaitentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaitentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
