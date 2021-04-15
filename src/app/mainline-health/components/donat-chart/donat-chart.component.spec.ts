import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DonatChartComponent } from './donat-chart.component'

describe('DonatChartComponent', () => {
  let component: DonatChartComponent
  let fixture: ComponentFixture<DonatChartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonatChartComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
