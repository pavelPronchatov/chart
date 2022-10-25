import * as Highcharts from "highcharts";

export const optionsPie: Highcharts.Options = {
  chart: {
    type: 'pie',
    backgroundColor: '#4E4E4E',
  },
  legend: {
    itemStyle: {
      color: 'white',
      opacity: 1
    },
    itemHoverStyle: {
      color: 'white',
      opacity: 0.8
    }
  },
  title: {
    verticalAlign: 'middle',
    align: 'center',
    floating: true,
    text: '<span style="font-size: 50px; color: white">215</span><br><span style="color: #B1B1B1">133 (+74)<br>82</span>'
  },
  plotOptions: {
    pie: {
      innerSize: '80%',
      center: ['50%', '50%']
    },
    series: {
      allowPointSelect: true,
      showInLegend: true,
      label: {style: {color: 'red'}},
      dataLabels: {
        align: 'center',
        enabled: true,
        format: '{point.percentage:.0f}%',
        style: {fontSize: "18px", color: "white"}
      }
    }
  },

  series: [{
    data: [
      {
        name: "Зашифровано",
        y: 133,
        color: "#77954D",
        // @ts-ignore
        borderColor: 'transparent',
      },
      {
        name: "Не зашифровано",
        y: 82,
        color: "#979797",
        // @ts-ignore
        borderColor: 'transparent'
      },
    ]
  }]

}