import { ButtonDiary } from "components/Diary/styles";
import { Form } from "./styles";
import { useState, FormEvent, ChangeEvent } from "react";
import { AllPatients } from "services/PatientService";
import { appointiment } from "types/api-types/appointment";

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState<appointiment>({
    startTime: "",
    endTime: "",
    date: "",
    psychologistId: "",
    patientId: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AllPatients.therapysection(appointment);
      console.log("ok");
      setAppointment({
        startTime: "",
        endTime: "",
        date: "",
        psychologistId: "",
        patientId: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="time"
        name="startTime"
        value={appointment.startTime}
        onChange={handleChange}
        placeholder="Hora de Início"
      />
      <input
        type="time"
        name="endTime"
        value={appointment.endTime}
        onChange={handleChange}
        placeholder="Hora final"
      />
      <input
        type="date"
        name="date"
        value={appointment.date}
        onChange={handleChange}
        placeholder="Dia"
      />
      <ButtonDiary type="submit">Agendar consulta</ButtonDiary>
    </Form>
  );
};

export default AppointmentForm;
