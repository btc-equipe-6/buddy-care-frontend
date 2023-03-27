import { ButtonDiary, TextArea } from "./styles";

const Diary = () => {
 return (
  <form action=''>
   <TextArea id='journal-entry' rows={parseInt('10')} cols={50}></TextArea>
   <ButtonDiary id='submit-entry'>enviar</ButtonDiary>
  </form>
 )
}

export default Diary;
