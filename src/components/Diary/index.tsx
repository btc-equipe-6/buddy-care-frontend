import { useState, FormEvent, ChangeEvent,} from "react";
import { AllPatients } from "services/PatientService";
import { sentimentAnalysisPacient } from "types/api-types/patients";
import { ButtonDiary, TextArea } from "./styles";

const Diary = () => {
  const [newPost, setNewPost] = useState<sentimentAnalysisPacient>({
    patientId: "cdfeccad-1d8b-4f32-9a36-e31e96dacdd3",
    txt: "",
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, txt: event.target.value });
    console.log("aoba", newPost);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AllPatients.creatSentimentAnalise(newPost);
      console.log("ok");
      setNewPost({ ...newPost, txt: "" })
    } catch (error) {
      console.error(error);
    }
  };
 
return (
    <form onSubmit={handleSubmit}>
      <TextArea
        id="journal-entry"
        rows={10}
        cols={50}
        value={newPost.txt}
        onChange={handleChange}
      />
      <ButtonDiary id="submit-entry" type="submit">
        enviar
      </ButtonDiary>
    </form>
  );
};

export default Diary;
