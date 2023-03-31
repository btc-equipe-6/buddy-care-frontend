import { useState, useEffect } from "react";
import { AllPatients } from "services/PatientService";
import { therapySessionRequest, therapySession } from "types/api-types/appointment";
import { Container } from "./styled";
import { Button } from "reactstrap";

const AppointmentRequests: React.FC = () => {
  const [requests, setRequests] = useState<therapySessionRequest[]>([]);
  const [confirmed, setConfirmed] = useState<therapySession[]>([]);
  const id = JSON.parse(localStorage.getItem("user") ?? "")?.id ?? "";

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await AllPatients.UserById(id);
        const fetchedRequests = res?.data.therapySessionRequest ?? [];
        const fetchedConfirmed = res?.data.therapySession ?? [];

        setRequests(fetchedRequests);
        setConfirmed(fetchedConfirmed);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchRequests();
    }
  }, [id]);

  const handleAccept = async (id: string) => {
    try {
        const updatedAppointment = await AllPatients.therapyAccept(id);
        const newSession= updatedAppointment ;
        setRequests((prevRequests) => prevRequests.filter((appointment) => appointment.id !== id));
        
      }
      
    catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await AllPatients.therapyReject(id);
      setRequests((prevRequests) => prevRequests.filter((appointment) => appointment.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2>Solicitações de Consulta Pendentes</h2>
      {requests.length === 0 ? (
        <p>Não há solicitações pendentes no momento.</p>
      ) : (
        <ul>
          {requests.map((appointment) => (
            <li key={appointment.id}>
              <p>
                <strong>Data:</strong> {appointment.date}
              </p>
              <p>
                <strong>Horário:</strong> {appointment.startTime}
              </p>
              {appointment.requesterId !== id ?(
                <>
                  <Button onClick={() => handleAccept(appointment.id)}>Aceitar</Button>
                  <Button onClick={() => handleReject(appointment.id)}>Recusar</Button>
                </>
                ):(<Button onClick={() => handleReject(appointment.id)}>deletar</Button>)}
                
            </li>
          ))}
        </ul>
      )}
      <h2>Consultas Confirmadas</h2>
      {confirmed.length === 0 ? (
        <p>Não há consultas confirmadas no momento.</p>
      ) : (
        <ul>
          {confirmed.map((appointment) => (
            <li key={appointment.id}>
              <p>
                <strong>Data:</strong> {appointment.date}
              </p>
              <p>
                <strong>Horário:</strong> {appointment.startTime}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default AppointmentRequests;



