import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainer } from './containers/dashboard-container/dashboard-container.component';

const routes: Routes = [{ path: '', component: DashboardContainer }];

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardContainer
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
