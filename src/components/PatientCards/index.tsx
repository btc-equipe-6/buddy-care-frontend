import { Link } from 'react-router-dom'
import { PatientContainer, PatientProfile, PatientData } from './styles'
import { Patient } from 'types/api-types/patients'
import { Button } from 'reactstrap'

export const patientsN = [
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
]

interface PatientCardProps {
 filteredPatients: Patient[]
}

const PatientCards = ({ filteredPatients }: PatientCardProps) => {
 return (
  <>
   {filteredPatients.map(patients => (
    <Link
     to={`/patient/1`}
     key={patients.name}
     style={{ color: 'transparent' }}>
     <PatientContainer key={patients.name}>
      <PatientProfile></PatientProfile>
      <PatientData>{patients.name}</PatientData>
      <div>
       <Link to='/report' style={{ color: 'transparent' }}>
        <Button href=''>Criar Relatório</Button>
       </Link>
      </div>
     </PatientContainer>
    </Link>
   ))}
  </>
 )
}

export default PatientCards
