import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainlineHealthComponent } from './mainline-health.component';


const routes: Routes = [
  { path: '', component: MainlineHealthComponent }
];

@NgModule({
  declarations: [
    MainlineHealthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainlineHealthModule { }
