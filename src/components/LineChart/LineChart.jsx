import React from 'react'
import Chart from 'chart.js/auto'; import { Line } from "react-chartjs-2";
import { chartData } from '../../data/chartData'

const LineChart = () => {
  return (
    <div className='bg-slate-100 p-2'>
      <Line
    
        data={chartData} 
        options={{
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            title:{
              display: true,
              text:'Power consumption',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'right',
            },
            y1: {
              type: 'linear' ,
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
            y2: {
                type: 'linear' ,
                display: true,
                position: 'right',
                grid: {
                  drawOnChartArea: false,
                },
              }
            }
          }
        }}
      />
    </div>
  )
}

export default LineChart