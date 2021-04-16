export interface IDonatOptions {
  accessibility: {
    point: {
      valueSuffix: string
    }
    chart: {
      plotBackgroundColor: string | null
      plotBorderWidth: number
      plotShadow: boolean
      type: string
    }
    credits: { enabled: boolean }
    plotOptions: { pie: { center: Array<string>}}
    cursor: string
    dataLabels: {
      connectorPadding: number
      connectorShape: string
      distance: number
      enabled: boolean
      format: string
    }
    style: { fontSize: string }
    size: string
  }
  series: any[]
  title: {
    align: string
  }
  style: {fontSize: string}
  text: number
  verticalAlign: string
  tooltip: {
    headerFormat: string
    pointFormat: string
    useHTML: boolean
  }
}