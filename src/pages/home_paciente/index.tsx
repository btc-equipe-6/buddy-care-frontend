import BarChart from "components/Charts/BarChart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Psychologist, PsychologistDetails } from "types/api-types/psychologist";
import { PatientContainer, PatientProfile, PatientData } from '../../components/PatientCards/styles'
import {  Container,Content } from "../Home/styles";
import { PsychologistService } from "services/PsychologistService";


const PatientHome = () => {

    const [psychologist, setPsychologist] = useState<Psychologist[]>();
   const getAll= async () => {
    const res = await PsychologistService().findAll()
    setPsychologist(res)
   } 
   useEffect(() => {
    getAll()
  }, []);
   return (
        <Container>
          {psychologist?.map((psychologist) => (
            <Content key={psychologist.id}>
              <PatientContainer key={psychologist.name}>
          <PatientProfile src="https://img.freepik.com/fotos-gratis/aluna-bonita-em-luvas-quentes-de-chapeu-vermelho-senta-se-no-parque-sorri-e-parece-feliz_1258-150935.jpg?w=740&t=st=1679335779~exp=1679336379~hmac=bd17d1084edfa2e65f30efca8eabbc52c76275eb77149de2a01fd2771481b1bf" alt="profile" />
          <PatientData>
            Nome: {psychologist.name}
          </PatientData>
          <PatientData>
            Crp: {psychologist.crp}
          </PatientData>
          <PatientData>
            Telefone: {psychologist.phoneNumber}
          </PatientData>
        </PatientContainer>
            </Content>
          ))}
        </Container>
      );
    };
    export default PatientHome