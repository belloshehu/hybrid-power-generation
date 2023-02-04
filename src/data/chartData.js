import {load} from './power'


const labels = load.values.map(value => `${value.time.from}-${value.time.to}`)
const primaryData = load.values.map(value => value.power.primary)
const secondaryData = load.values.map(value => value.power.secondary)
const tertiaryData = load.values.map(value => value.power.tertiary)

console.log(primaryData)
console.log(labels)

export const chartData = {
    labels: labels,
    datasets: [
        {
            data: primaryData,
            label: 'Primary',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            yAxisID: 'y',
        },
        {
            data: secondaryData,
            label: 'Secondary',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(250,250,250,1)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 2,
            yAxisID: 'y1',
        },
        {
            data: tertiaryData,
            label: 'Tertiary',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(40,100,100,1)',
            borderColor: 'rgba(255,10,0,1)',
            borderWidth: 2,
            yAxisID: 'y2',
        }
    ]

}