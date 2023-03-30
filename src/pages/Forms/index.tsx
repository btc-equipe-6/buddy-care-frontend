import { useState } from "react";
import FormPatient from "./FormPatient";
import FormPsychologist from "./FormPsychologist";
import { CreatArea, FormContainer } from "./styles";

const MainForm = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>("patient");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    return ( 
        <CreatArea>
            <h1>Eu sou...</h1>
            <FormContainer>
                <div>
                    <label htmlFor='patient'>Paciente</label>
                    <input
                        type='radio'
                        id='patient'
                        value='patient'
                        checked={selectedValue === 'patient'}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor='psychologist'>Psicologo</label>
                    <input
                        type='radio'
                        id='psychologist'
                        value='psychologist'
                        checked={selectedValue === 'psychologist'} onChange={handleChange}
                    />
                    </div>
            </FormContainer>
            {selectedValue === 'patient' && <FormPatient />}
            {selectedValue === 'psychologist' && <FormPsychologist />}
        </CreatArea>
     );
}
 
export default MainForm;