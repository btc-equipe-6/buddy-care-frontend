import PatientCards from "components/PatientCards";
import { Container, InputPatient, PatientContainer } from "./styles";
import { useEffect, useState } from "react";
import { AllPatients } from "services/PatientService";
import { Patient } from "types/api-types/patients";


const Patients  = () => {
  const [filter, setFilter] = useState("");  
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await AllPatients.AllPatients();
        console.log(response)
        if (response && response.data) {
          setPatients(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, []);



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