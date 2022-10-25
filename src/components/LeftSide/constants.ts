import * as Highcharts from "highcharts";

export const optionSankey: Highcharts.Options = {
  chart: {
    backgroundColor: '#4E4E4E',
  },
  title: {
    text: 'Лес'
  },
  series: [{
    keys: ['from', 'to', 'weight'],
    data: [
      {
        from: 'Медведи',
        to: 'Мёд',
        weight: 40,
        color: {
          linearGradient: {x1: 0, x2: 1, y1: 0, y2: 0},
          stops: [
            [0, '#979797'], // start
            [0.5, 'linear-gradient(270deg, rgba(139, 117, 186, 0.85) 1.55%, rgba(151, 151, 151, 0.85) 100%)'],
            [1, '#8B75BA'],
          ]
        }
      },
      {
        from: 'Медведи',
        to: 'Малина',
        weight: 10,
        color: {
          linearGradient: {x1: 0, x2: 1, y1: 0, y2: 0},
          stops: [
            [0, '#979797'], // start
            [0.5, 'linear-gradient(272.51deg, rgba(221, 175, 211, 0.85) 1.07%, rgba(151, 151, 151, 0.85) 99.62%)'],
            [1, '#DDAFD3'],

          ]
        }
      },
      {
        from: 'Медведи',
        to: 'Яблоки',
        weight: 15,
        color: {
          linearGradient: {x1: 0, x2: 1, y1: 0, y2: 0},
          stops: [
            [0, '#979797'], // start
            [0.5, 'linear-gradient(93.93deg, rgba(151, 151, 151, 0.85) 13.7%, rgba(126, 184, 191, 0.85) 98.48%)'],
            [1, '#7EB8BF'],

          ]
        }
      },
      {
        from: 'Ежи',
        to: 'Мёд',
        weight: 10,
        color: {
          linearGradient: {x1: 0, x2: 1, y1: 0, y2: 0},
          stops: [
            [0, '#77954D'], // start
            [0.5, 'linear-gradient(267.7deg, rgba(139, 117, 186, 0.85) 1.1%, rgba(119, 149, 77, 0.85) 87.92%)'],
            [1, '#8B75BA'],

          ]
        }
      },
      {
        from: 'Ежи',
        to: 'Малина',
        weight: 15,
        color: {
          linearGradient: {x1: 0, x2: 1, y1: 0, y2: 0},
          stops: [
            [0, '#77954D'], // start
            [0.5, 'linear-gradient(269.43deg, rgba(221, 175, 211, 0.85) 18.74%, rgba(119, 149, 77, 0.85) 80.77%)'],
            [1, '#DDAFD3'],

          ]
        }
      },
      {
        from: 'Ежи',
        to: 'Яблоки',
        weight: 10,
        color: {
          linearGradient: {x1: 0, x2: 1, y1: 0, y2: 0},
          stops: [
            [0, '#77954D'], // start
            [0.5, 'linear-gradient(90deg, rgba(119, 149, 77, 0.85) 11.89%, rgba(126, 184, 191, 0.85) 99.22%)'],
            [1, '#7EB8BF'],

          ]
        }
      },
    ],
    type: 'sankey',
    nodes: [
      {
        id: 'Медведи',
        color: '#979797',
        name: 'Медведи 65',
        dataLabels: {
          enabled: true,
          style: {color: 'white', fontSize: '12px'},
          format: '<small>{point.name}</small>%',
        }
      },
      {
        id: 'Ежи',
        color: '#77954D',
        name: 'Медведи 35',
        dataLabels: {
          style: {color: 'white', fontSize: '12px'},
          format: '<small>{point.name}</small>%',
        },
      },
      {
        id: 'Мёд',
        color: '#8B75BA',
        name: 'Мёд 50',
        dataLabels: {
          style: {color: 'white', fontSize: '10px'},
          format: '<small>{point.name}</small>%',
        },
      },
      {
        id: 'Малина',
        color: '#DDAFD3',
        name: 'Малина 20',
        dataLabels: {
          style: {color: 'white', fontSize: '10px'},
          format: '<small>{point.name}</small>%',
        },
      },
      {
        id: 'Яблоки',
        color: '#7EB8BF',
        name: 'Яблоки 20',
        dataLabels: {
          style: {color: 'white', fontSize: '10px'},
          format: '<small>{point.name}</small>%',
        },
      },
    ]
  }]

}