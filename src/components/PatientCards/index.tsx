import { Link } from 'react-router-dom'
import { PatientContainer, PatientProfile, PatientData } from './styles'
import { Patient } from 'types/api-types/patients'
import { PsychologistDetails } from 'types/api-types/psychologist'

/* export const patientsN = [
 {
  id: 'abcd1',
  name: 'Fernando Sobral',
  age: 27,
  email: 'fernandrosobral@gmail.com',
  gender: 'Masculino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd2',
  name: 'Irlan Mattos',
  age: 15,
  email: 'irlanmattos@gmail.com',
  gender: 'Masculino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd3',
  name: 'Anielly Lima',
  age: 21,
  email: 'aniellylima@gmail.com',
  gender: 'Feminino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd4',
  name: 'Marcelo Silva',
  age: 49,
  email: 'marcelosilva@gmail.com',
  gender: 'Masculino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd5',
  name: 'André Montserrat',
  age: 32,
  email: 'fernandrosobral@gmail.com',
  gender: 'Masculino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd6',
  name: 'Erilandia Silva',
  age: 23,
  email: 'erilandiasilva@gmail.com',
  gender: 'Feminino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd7',
  name: 'José Macedo',
  age: 32,
  email: 'josemacedo@gmail.com',
  gender: 'Masculino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd8',
  name: 'Rafael Lacerda',
  age: 37,
  email: 'rafaellacerda@gmail.com',
  gender: 'Masculino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 },
 {
  id: 'abcd9',
  name: 'Agatha Luniere',
  age: 38,
  email: 'agathaluniere@gmail.com',
  gender: 'Feminino',
  phonenumber: 71999768652,
  emergencyContact: '73999284181',
  image: 'https://via.placeholder.com/300x200.png?text=Item+1'
 }
] */

interface PatientCardProps {
 patients: PsychologistDetails[]
}

const PatientCards = ({ patients }: PatientCardProps) => {
  return ( 
    <>
    {patients?.map((patient) => (
       <Link to={`/patient/${patient.id}`} key={patient.name} style={ { color: 'transparent' } }>
        <PatientContainer key={patient.name}>
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
