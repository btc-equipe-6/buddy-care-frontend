import { Chart, ChartContainer, Title } from "./styles";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip
  } from 'chart.js'
  import { Bar } from 'react-chartjs-2'

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const BarChart = () => {
    const formatData = {
        labels: ['dia 1', 'dia 2', 'dia 3', 'dia 4', 'dia 5', 'dia 6', 'dia 7'],
        datasets: [
          {
            barThickness: 30,
            label: "label",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: 'rgba(112,194,187,1)',
          }
        ]
      }
    return ( 
        <ChartContainer>
            <Title>GRÁFICO DE PNI</Title>
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
     );
}
 
export default BarChart;