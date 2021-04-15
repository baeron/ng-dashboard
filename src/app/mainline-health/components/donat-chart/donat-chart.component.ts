import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { normalizeCommonJSImport } from '../../normalizeCommonJSImport'
const loadHighcharts = normalizeCommonJSImport(import('highcharts'))

@Component({
  selector: 'app-donat-chart',
  template: `<div *ngIf="options && highcharts">
    <highcharts-chart
      [Highcharts]="highcharts"
      [options]="pieChartOptions"
      style="display: block; overflow: hidden;"
      [style.width]="maxWidth"
      [style.height]="maxHeight"
    ></highcharts-chart>
  </div>`,
})
export class DonatChartComponent implements OnInit {
  pieChartOptions: any | undefined
  @Input() options: any | undefined
  @Input() message: any | undefined
  @Input() donatSize: any | undefined
  @Input() mainFontsize: any | undefined
  @Input() maxWidth: any | undefined
  @Input() maxHeight: any | undefined
  @Output() userSelect = new EventEmitter<any>()
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
            if (this.options)
              this.pieChartOptions = this.setPieChartOptions(
                this.options,
                this.donatSize,
                this.message
              )
          }
        }
      }
    }
  }

  emitValue(data: any) {
    const testType = data.point.name
    const tcSuite = this.options.suite
    const tcStatus = data.point.status
    this.userSelect.emit({ testType, tcSuite, tcStatus })
  }

  setPieChartOptions = (
    innerOptions: any,
    chartSize: string,
    message?: string
  ) => {
    const msgText = message ? `<b>${message}</b></br>` : ''
    return {
      title: {
        text: innerOptions.failed + innerOptions.passed + innerOptions.skipped,
        align: 'center',
        verticalAlign: 'middle',
        style: { fontSize: this.mainFontsize },
      },
      credits: {
        enabled: false,
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'pie',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      tooltip: {
        useHTML: true,
        headerFormat: msgText,
        pointFormat: `<b>{point.status}</b>: {point.y}`,
      },
      plotOptions: {
        pie: {
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: 10,
            connectorShape: 'crookedLine',
            connectorPadding: 0,
            format: '{point.percentage:.0f} %',
            style: {
              fontSize: '14px',
            },
          },
          center: ['50%', '50%'],
          size: chartSize,
        },
      },
      series: [
        {
          type: 'pie',
          innerSize: '50%',
          colors: ['#599c35', '#bd3230', '#f8a71b'],
          point: {
            events: {
              click: this.emitValue.bind(this),
            },
          },
          data: [
            {
              name: innerOptions.passed,
              status: 'SUCCESS',
              color: '#599c35',
              y: innerOptions.passed,
            },
            {
              name: innerOptions.failed,
              status: 'FAILURE',
              color: '#bd3230',
              y: innerOptions.failed,
            },
            {
              name: innerOptions.skipped,
              status: 'SKIP',
              color: '#f8a71b',
              y: innerOptions.skipped,
            },
          ],
        },
      ],
    }
  }
}
