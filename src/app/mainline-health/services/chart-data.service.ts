import { Injectable } from '@angular/core'
import { forkJoin, Observable, of } from 'rxjs'
import { delay, map, mergeMap } from 'rxjs/operators'
import * as fakeData from '../placeholder'
import { Branch } from '../models/brachName.enum'

const HALF_SECOND = 500
const ONE_SECOND = 1000
const TWO_SECOND = 2000
const THREE_SECOND = 3000

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor() {}

  getBranchNameData = (): Observable<string[]> => {
    return of(fakeData.branchList).pipe(delay(ONE_SECOND))
  }

  getBuildNameDataByBranchName = (branchName: string): Observable<string[]> => {
    switch (branchName.toUpperCase()) {
      case Branch.bHydraMainline.toUpperCase(): {
        return of(fakeData.bHidraMainlineBuildList).pipe(delay(TWO_SECOND))
      }
      default: {
        return of([])
      }
    }
  }

  getMainDonat = (branchName: string, buildName: string): Observable<any> => {
    return of(fakeData.mainDonat).pipe(delay(ONE_SECOND))
  }

  getMiniDonatsData = (): any => {
    return of(['test']).pipe(
      delay(THREE_SECOND),
      map((builds: any) => {
        return builds
      }),
      mergeMap((buildName) => {
        const miniDonatForSanityTest = of({
          failed: 9,
          passed: 21,
          skipped: 32,
        }).pipe(delay(HALF_SECOND))
        const miniDonatForBatTest = of({
          failed: 28,
          passed: 15,
          skipped: 3,
        }).pipe(delay(ONE_SECOND))
        const miniDonatForE2ETest = of({
          failed: 17,
          passed: 9,
          skipped: 44,
        }).pipe(delay(HALF_SECOND))
        const miniDonatForP1Test = of({
          failed: 34,
          passed: 10,
          skipped: 8,
        }).pipe(delay(TWO_SECOND))

        return forkJoin([
          miniDonatForSanityTest,
          miniDonatForBatTest,
          miniDonatForE2ETest,
          miniDonatForP1Test,
        ])
      })
    )
  }
}

