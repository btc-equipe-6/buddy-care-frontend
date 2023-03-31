import BarChart from "components/Charts/BarChart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PsychologistDetails } from "types/api-types/psychologist";
import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, ContentText, TopBox } from "./styles";
import { PsychologistService } from "services/PsychologistService";
import LineChart from "components/Charts/LineChart";

const Home = () => {
    const { id } = useParams();
    const [psychologist, setPsychologist] = useState<PsychologistDetails[]>();

    const PsychologistIdRender = async () => {
      if (id !== undefined) {
        const res = await PsychologistService().findById(id);
        setPsychologist([res])
      }
    };

    useEffect(() => {
      PsychologistIdRender();
    }, []);



    return ( 
        <Container>
            {psychologist?.map((psychologist) => (
            <Content key={psychologist.id}>
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
                        <LineChart
                           sentimentAnalisys={psychologist.sentimentAnalysisEvolution}
                        />
                    </ChartBoxTwo>
                    <ChartBoxTwo>
                        <BarChart sentimentAnalisys={psychologist.sentimentAnalysisEvolution} />
                    </ChartBoxTwo>
                </BottomBox>
            </Content>  
            ))}
        </Container>
     );
}
 
export default Home;