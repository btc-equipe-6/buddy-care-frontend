import BarChart from "components/Charts/BarChart";
import PolarChart from "components/Charts/PolarChart";
import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, ContentText, TopBox } from "pages/Home/styles";

const PatientDashboard = () => {


    return ( 
        <Container>
            <Content>
                <TopBox>
                    <ChartBox>
                        <ContentText>Nome</ContentText>
                        <ContentText>Marcelo Mattos</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>Idade</ContentText>
                        <ContentText>41</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>Telefone</ContentText>
                        <ContentText>7523932882</ContentText>
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
 
export default PatientDashboard;