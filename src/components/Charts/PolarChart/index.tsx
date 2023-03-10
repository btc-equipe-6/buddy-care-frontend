import { Chart, ChartContainer, Title } from "./styles";
import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    RadialLinearScale,
    Tooltip
  } from 'chart.js'
  import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

const PolarChart = () => {
    const formatData = {
        labels: ['', '', '', '', '', ''],
        datasets: [
          {
            label: 'My Data',
            data: ['10', '15', '18', '20', '25', '25'],
            backgroundColor: [
              '#467c77',
              '#5faba4',
              '#2e9e93',
              '#169286',
              '#0b8e81',
              '#037c70'
            ],
            borderColor: 'black'
          }
        ]
      }
    return ( 
        <ChartContainer>
            <Title>GRÁFICO DE ANSIEDADE</Title>
            <Chart>
            <PolarArea
                data={formatData}
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
        </ChartContainer>
     );
}
 
export default PolarChart;