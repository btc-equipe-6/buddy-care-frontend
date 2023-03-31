import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import { useAuth } from "context/AuthContext";
import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, ContentText, TopBox } from "pages/Home/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllPatients } from "services/PatientService";
import { PatientDetails } from "types/api-types/patients";

const PatientDashboard = () => {
    const {patientId} = useAuth()
    console.log(patientId);
    const {id} = useParams()
    const [patient, setPatient] = useState<PatientDetails>();

    const PatientIdRender = async () => {
          const res = await AllPatients.UserById(id);
          console.log(res);
          console.log(res?.data);
          setPatient(res?.data)
      };
      useEffect(() => {
        PatientIdRender();
      }, [])
    
    return (
        <>
            <Container key={patient?.id}>
                <Content>
                    <TopBox>
                        <ChartBox>
                            <ContentText>Nome</ContentText>
                            <ContentText>{patient?.name}</ContentText>
                        </ChartBox>
                        <ChartBox>
                            <ContentText>Idade</ContentText>
                            <ContentText>{patient?.age}</ContentText>
                        </ChartBox>
                        <ChartBox>
                            <ContentText>Telefone</ContentText>
                            <ContentText>{patient?.phoneNumber}</ContentText>
                        </ChartBox>
                    </TopBox>
                    <BottomBox>
                        <ChartBoxTwo>
                            <LineChart/>
                        </ChartBoxTwo>
                        <ChartBoxTwo>
                            <BarChart/>
                        </ChartBoxTwo>
                    </BottomBox>
                </Content>  
            </Container>
        </>
       
    );
}
 
export default PatientDashboard;