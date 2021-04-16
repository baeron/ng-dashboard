import { MiniDonatsComponent } from './mini-donats/mini-donats.component'
import { SelectComponent } from './select/select.component'
import { DonatChartComponent } from './donat-chart/donat-chart.component'
import { TrendChartComponent } from './trend-chart/trend-chart.component'

export const mainLineHealthComponents: any[] = [
  DonatChartComponent,
  TrendChartComponent,
  SelectComponent,
  MiniDonatsComponent,
]

export * from './select/select.component'
export * from './donat-chart/donat-chart.component'
export * from './trend-chart/trend-chart.component'
export * from './mini-donats/mini-donats.component'
