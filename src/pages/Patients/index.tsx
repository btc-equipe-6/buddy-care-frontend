import PatientCards from "components/PatientCards";
import { Container, InputPatient, PatientContainer } from "./styles";
import { useEffect, useState } from "react";
import { Patient } from "types/api-types/patients";
import { PsychologistService } from "services/PsychologistService";
import { useParams } from "react-router-dom";
import { PsychologistDetails } from "types/api-types/psychologist";


const Patients  = () => {
  //const [filter, setFilter] = useState("");  
  //const [patients, setPatients] = useState<Patient[]>([]);
  const [psychologist, setPsychologist] = useState<PsychologistDetails[]>([]);
  
  const { id } = useParams();

    const PsychologistIdRender = async () => {
      if (id !== undefined) {
        const res = await PsychologistService().findById(id);
        setPsychologist([res])
      }
    };

    useEffect(() => {
      PsychologistIdRender();
    }, []);

  //const filteredPatients = patients?.filter((patient) =>
  //patient.name.toLowerCase().includes(filter.toLowerCase())

//);
    return ( 
      <>
      {psychologist.map((psychologist) => (
        <Container>
          <InputPatient />
            <PatientContainer>
                <PatientCards patients={psychologist.patients} />
            </PatientContainer>
        </Container>
        ))}
      </>
     );
}
 
export default Patients ;