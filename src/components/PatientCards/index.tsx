import { Link } from 'react-router-dom'
import { PatientContainer, PatientProfile, PatientData } from './styles'
import { PsychologistDetails } from 'types/api-types/psychologist'
import { Button } from 'reactstrap'
import AppointmentForm from 'components/appoitamentForm'

interface PatientCardProps {
 patients: PsychologistDetails[]
}

const PatientCards = ({ patients }: PatientCardProps) => {

  return ( 
    <>
    {patients?.map((patient) => (
       <Link to={`/patient/${patient.id}`} key={patient.name} style={ { color: 'transparent' }}>
        <PatientContainer key={patient.name} >
          <PatientProfile src="https://img.freepik.com/fotos-gratis/aluna-bonita-em-luvas-quentes-de-chapeu-vermelho-senta-se-no-parque-sorri-e-parece-feliz_1258-150935.jpg?w=740&t=st=1679335779~exp=1679336379~hmac=bd17d1084edfa2e65f30efca8eabbc52c76275eb77149de2a01fd2771481b1bf" alt="profile" />
          <PatientData>
            {patient.name}
          </PatientData>
        
          
        </PatientContainer>
        </Link>
      ))}
    </>   
  );
    
}

export default PatientCards
