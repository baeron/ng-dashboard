import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDonatsComponent } from './mini-donats.component';

describe('MiniDonatsComponent', () => {
  let component: MiniDonatsComponent;
  let fixture: ComponentFixture<MiniDonatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniDonatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDonatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
