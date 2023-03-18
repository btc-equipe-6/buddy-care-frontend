import BarChart from "components/Charts/BarChart";
import PolarChart from "components/Charts/PolarChart";
import { patientsN } from "components/PatientCards";
import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, ContentText, TopBox } from "pages/Home/styles";
import { useParams } from "react-router-dom";

const PatientDashboard = () => {
    
    const { id } = useParams();
    const patient = patientsN.find((patient) => patient.id === id);

    if (!patient) {
        return <div>Paciente não encontrado.</div>;
    }

    return ( 
        <Container>
            <Content>
                <TopBox>
                    <ChartBox>
                        <ContentText>Nome</ContentText>
                        <ContentText>{patient.name}</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>Idade</ContentText>
                        <ContentText>{patient.age}</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>Telefone</ContentText>
                        <ContentText>{patient.phonenumber}</ContentText>
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