import {
 BarElement,
 CategoryScale,
 Chart as ChartJS,
 Legend,
 LinearScale,
 Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { SentimentAnalysisEvolution } from 'types/api-types/analisisy'
import { Chart, ChartContainer, Title } from './styles'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
interface BarChartProps {
 sentimentAnalisys: SentimentAnalysisEvolution[]
}
const countSentiments = (sentiments: SentimentAnalysisEvolution[]) => {
 const sentimentCount: any = {
  Joy: 0,
  Anger: 0,
  Fear: 0,
  Sadness: 0,
  Surprise: 0,
  Disgust: 0,
  Trust: 0,
  Anticipation: 0,
  Optimism: 0,
  Pessimism: 0,
  Neutral: 0
 }

 sentiments.forEach((el: { code: any }) => {
  sentimentCount[el.code]++
 })

 return sentimentCount
}

const BarChart = ({ sentimentAnalisys }: BarChartProps | any) => {
 const sentimentCount = countSentiments(sentimentAnalisys)
 const formatData = {
  labels: [
   'Alegria',
   'Raiva',
   'Medo',
   'Tristeza',
   'Surpresa',
   'Repulsa',
   'Confiança',
   'Antecipação',
   'Otimismo',
   'Pessimismo',
   'Neutro'
  ],
  datasets: [
   {
    barThickness: 30,
    label: 'label, nervosimso, medo',
    data: Object.values(sentimentCount),
    backgroundColor: '#71c2bb'
   }
  ]
 }
 return (
  <ChartContainer>
   <Title>GRÁFICO DE EMOÇÕES GERAL</Title>
   <Chart>
    <Bar
     data={formatData}
     options={{
      maintainAspectRatio: false,
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
  </ChartContainer>
 )
}

export default BarChart
