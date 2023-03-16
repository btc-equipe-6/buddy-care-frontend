import PatientCards from "components/PatientCards";
import { Container, InputPatient, PatientContainer } from "./styles";
import { useState } from "react";
import { patients } from "components/PatientCards";

const Patients  = () => {
  const [filter, setFilter] = useState("");
  const filteredPatients = patients.filter((patient) =>
  patient.name.toLowerCase().includes(filter.toLowerCase())
);
    return ( 
        <Container>
          <InputPatient value={filter} onChange={(e) => setFilter(e.target.value)} />
            <PatientContainer>
                <PatientCards filteredPatients={filteredPatients} />
            </PatientContainer>
        </Container>
     );
}
 
export default Patients ;