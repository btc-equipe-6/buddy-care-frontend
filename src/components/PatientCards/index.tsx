import { PatientContainer, PatientProfile, PatientData } from './styles';

export const patients = [
    {
      name: 'Fernando Sobral',
      age: 27,
      email: 'fernandrosobral@gmail.com',
      gender: 'Masculino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'Irlan Mattos',
      age: 15,
      email: 'irlanmattos@gmail.com',
      gender: 'Masculino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'Anielly Lima',
      age: 21,
      email: 'aniellylima@gmail.com',
      gender: 'Feminino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'Marcelo Silva',
      age: 49,
      email: 'marcelosilva@gmail.com',
      gender: 'Masculino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'André Montserrat',
      age: 32,
      email: 'fernandrosobral@gmail.com',
      gender: 'Masculino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'Erilandia Silva',
      age: 23,
      email: 'erilandiasilva@gmail.com',
      gender: 'Feminino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'José Macedo',
      age: 32,
      email: 'josemacedo@gmail.com',
      gender: 'Masculino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'Rafael Lacerda',
      age: 37,
      email: 'rafaellacerda@gmail.com',
      gender: 'Masculino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
    {
      name: 'Agatha Luniere',
      age: 38,
      email: 'agathaluniere@gmail.com',
      gender: 'Feminino',
      phonenumber: 71999768652,
      emergencyContact: '73999284181',
      image: 'https://via.placeholder.com/300x200.png?text=Item+1',
    },
  ];

  type Patient = {
    name: string;
    age: number;
    email: string;
    gender: string;
    phonenumber: number;
    emergencyContact: string;
    image: string;
  };
  
  interface PatientCardProps {
    filteredPatients: Patient[];
  }

const PatientCards = ({ filteredPatients }: PatientCardProps) => {
  return ( 
    <>
    {filteredPatients.map((patients) => (
        <PatientContainer key={patients.name}>
          <PatientProfile>
          </PatientProfile>
          <PatientData>
            {patients.name}
          </PatientData>
        </PatientContainer>
      ))}
    </>   
  );
    
}
 
export default PatientCards;