
import { FormsModule } from '@angular/forms'
import { MatTabsModule } from '@angular/material/tabs'
import { RouterModule, Routes } from '@angular/router'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardContainer } from './dashboard-container.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardContainer,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'health',
        loadChildren: () =>
          import('../mainline-health/mainline-health.module').then(
            (m) => m.MainlineHealthModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('../build-details/build-details.module').then(
            (m) => m.BuildDetailsModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
