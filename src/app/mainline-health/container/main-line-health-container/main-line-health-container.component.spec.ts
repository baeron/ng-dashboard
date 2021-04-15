import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainLineHealthContainerComponent } from './main-line-health-container.component'

describe('MainLineHealthContainerComponent', () => {
  let component: MainLineHealthContainerComponent
  let fixture: ComponentFixture<MainLineHealthContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLineHealthContainerComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLineHealthContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
