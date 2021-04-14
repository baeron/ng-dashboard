import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlineHealthComponent } from './mainline-health.component';

describe('MainlineHealthComponent', () => {
  let component: MainlineHealthComponent;
  let fixture: ComponentFixture<MainlineHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlineHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlineHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
