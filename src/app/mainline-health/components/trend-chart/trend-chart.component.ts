import { Component, Input, OnInit, SimpleChanges } from '@angular/core'
import { normalizeCommonJSImport } from '../../normalizeCommonJSImport'
const loadHighcharts = normalizeCommonJSImport(import('highcharts'))
@Component({
  selector: 'app-trend-chart',
  template: ` <div *ngIf="options && highcharts">
    <highcharts-chart
      [Highcharts]="highcharts"
      [options]="columnChartOptions"
      [runOutsideAngular]="true"
      style="width: 100%; display: block; overflow: hidden;"
    ></highcharts-chart>
  </div>`,
})
export class TrendChartComponent implements OnInit {
  columnChartOptions: any | undefined
  @Input() options: any | undefined
  highcharts: any
  constructor() {}

  public async ngOnInit() {
    this.highcharts = await loadHighcharts
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'options': {
            this.columnChartOptions = this.setColumnChartOptions(this.options)
          }
        }
      }
    }
  }

  setColumnChartOptions(options: any) {
    return {
      chart: {
        type: 'column',
        height: 275,
      },
      legend: { enabled: false },
      credits: {
        enabled: false,
      },
      title: {
        text: '',
        style: {
          display: 'none',
        },
      },
      subtitle: {
        text: '',
        style: {
          display: 'none',
        },
      },
      xAxis: {
        categories: options.titleList,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Build health',
        },
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      },
      plotOptions: {
        column: {
          stacking: 'percent',
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: 'FAILURE',
          color: '#bd3230',
          data: options.failedList,
          dataLabels: {
            color: '#000',
          },
        },
        {
          name: 'SKIP',
          color: '#f8a71b',
          data: options.skippedList,
          dataLabels: {
            color: '#000',
          },
        },
        {
          name: 'SUCCESS',
          color: '#599c35',
          data: options.passedList,
          dataLabels: {
            color: '#000',
          },
        },
      ],
    }
  }
}
