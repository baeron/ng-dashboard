import { IDonat } from './../../models/IDonat';
import { ChartDataService } from './../../services/chart-data.service'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

const MAIN_BRANCH = 'b-hydra-mainline'

@Component({
  selector: 'app-main-line-health-container',
  templateUrl: './main-line-health-container.component.html',
  styleUrls: ['./main-line-health-container.component.scss'],
})
export class MainLineHealthContainer implements OnInit {
  branchList$!: Observable<Array<string>>
  buildList$!: Observable<Array<string>>
  miniDonatsList$!: Observable<Array<any>>
  mainDonat$!: Observable<IDonat>

  mainDonatWidth = '400px';
  mainDonatHeight = '420px';
  mainDonatSize = '290px';

  constructor(private chartData: ChartDataService) {}

  ngOnInit(): void {
    this.getSelectedDataAtFirstTime()
  }

  getSelectedDataAtFirstTime = () => {
    this.branchList$ = this.chartData.getBranchNameData()
    this.buildList$ = this.chartData.getBuildNameDataByBranchName(MAIN_BRANCH)
    this.miniDonatsList$ = this.chartData.getMiniDonatsData()
    this.mainDonat$ = this.chartData.getMainDonat('branchName', 'buildName')
  }
}
