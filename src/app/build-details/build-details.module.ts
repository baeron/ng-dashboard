import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuildDetailsComponent } from './build-details.component';


const routes: Routes = [
  { path: '', component: BuildDetailsComponent }
];

@NgModule({
  declarations: [
    BuildDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuildDetailsModule { }
