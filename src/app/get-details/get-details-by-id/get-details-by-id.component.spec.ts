import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailsByIdComponent } from './get-details-by-id.component';

describe('GetDetailsByIdComponent', () => {
  let component: GetDetailsByIdComponent;
  let fixture: ComponentFixture<GetDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDetailsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
