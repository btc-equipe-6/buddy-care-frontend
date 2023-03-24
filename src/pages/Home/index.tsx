import BarChart from "components/Charts/BarChart";
import PolarChart from "components/Charts/PolarChart";
import { useEffect, useState } from "react";
import { AllPatients } from "services/PatientService";
import { Psychologist } from "types/api-types/psychologist";
import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, ContentText, TopBox } from "./styles";

const Home = () => {
    
    const [psychologist, setPsychologist] = useState<Psychologist[]>([]);

    useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await AllPatients.AllPatients();
        console.log(response)
        if (response && response.data) {
          setPsychologist(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, []);


    return ( 
        <Container>
            {psychologist.map((psychologist) => (
            <Content>
            
                <TopBox>
                    <ChartBox>
                        <ContentText>Nome</ContentText>
                        <ContentText>{psychologist.name}</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>Email</ContentText>
                        <ContentText>{psychologist.email}</ContentText>
                    </ChartBox>
                    <ChartBox>
                        <ContentText>Telefone</ContentText>
                        <ContentText>{psychologist.phoneNumber}</ContentText>
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
            ))}
        </Container>
     );
}
 
export default Home;