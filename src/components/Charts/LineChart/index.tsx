import { Chart as ChartJS, PointElement } from 'chart.js'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { SentimentAnalysisEvolution } from 'types/api-types/analisisy'
import { Chart, LineChartContainer, TitleChart } from './styles'

ChartJS.register(PointElement)
interface LineChartProps {
 sentimentAnalisys: SentimentAnalysisEvolution[]
}

export default function LineChart({ sentimentAnalisys }: LineChartProps | any) {
 const formatData = {
  labels: ['', '', '', '', ''],
  datasets: [
   {
    label: 'Relevancia Absoluta',
    barThickness: 50,
    data: sentimentAnalisys?.map(
     (el: { abs_relevance: any }) => el.abs_relevance
    ),
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1
   },
   {
    label: 'Relevancia média',
    barThickness: 50,
    data: sentimentAnalisys?.map((el: { relevance: any }) => el.relevance),
    backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 1
   }
  ]
 }

 return (
  <LineChartContainer>
   <TitleChart>GRÁFICO DE EVOLUÇÃO</TitleChart>
   <Chart>
    <Line
     data={formatData}
     width={100}
     height={50}
     options={{
      aspectRatio: 2,
      responsive: true,
      layout: { autoPadding: true },
      plugins: {
       title: {
        display: true
       },
       legend: {
        display: false
       }
      }
     }}
    />
   </Chart>
  </LineChartContainer>
 )
}
