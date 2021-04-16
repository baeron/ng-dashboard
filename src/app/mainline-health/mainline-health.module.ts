import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MainLineHealthContainer } from './container/main-line-health-container/main-line-health-container.component'
import * as fromComponent from './components'
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [{ path: '', component: MainLineHealthContainer }]

@NgModule({
  declarations: [
    MainLineHealthContainer,
    ...fromComponent.mainLineHealthComponents,
  ],
  imports: [CommonModule, HighchartsChartModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainlineHealthModule {}
