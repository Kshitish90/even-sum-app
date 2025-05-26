import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenSumComponent } from './even-sum.component';

describe('EvenSumComponent', () => {
  let component: EvenSumComponent;
  let fixture: ComponentFixture<EvenSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenSumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
