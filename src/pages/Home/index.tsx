import BarChart from "components/Charts/BarChart";
import PolarChart from "components/Charts/PolarChart";
import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, ContentText, TopBox } from "./styles";

const Home = () => {
    return ( 
        <Container>
            <Content>
                <TopBox>
                    <ChartBox>
                        <ContentText>150</ContentText>
                        <ContentText>PACIENTES</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>15</ContentText>
                        <ContentText>PACIENTES NOVOS</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>9</ContentText>
                        <ContentText>DIÁRIOS LIDOS</ContentText>
                    </ChartBox>
                </TopBox>
                <BottomBox>
                    <ChartBoxTwo>
                        <BarChart/>
                    </ChartBoxTwo>
                    <ChartBoxTwo>
                        <PolarChart />
                    </ChartBoxTwo>
                </BottomBox>
            </Content>  
        </Container>
     );
}
 
export default Home;