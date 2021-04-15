import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './container/home/home.component'
import * as fromCompomemts from './components'

const routes: Routes = [{ path: '', component: HomeComponent }]
@NgModule({
  declarations: [HomeComponent, ...fromCompomemts.homeComponents],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
