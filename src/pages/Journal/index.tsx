import { useState, useEffect } from "react";
import Diary from "components/Diary";

import {
  JournalMain,
  JournalSection,
  TextJournal,
  Paragraph,
  TabContainer,
  TabButton,
  JournalSectionHistory,
} from "./styles";
import { AllPatients } from "services/PatientService";
import { sentimentAnalysisPacient } from "types/api-types/patients";

const Journal = () => {
  const [list, setlist] = useState<sentimentAnalysisPacient[]>([]);
  const [activeTab, setActiveTab] = useState("diary");

  useEffect(() => {
    const getlist = async () => {
      try {
        const res = await AllPatients.UserById(
          "cdfeccad-1d8b-4f32-9a36-e31e96dacdd3"
        );
        setlist(res?.data.sentimentAnalysisPacient || []);
      } catch (err) {
        console.log(err);
      }
    };
    if (activeTab === "history") {
      getlist();
    }
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <JournalMain>
      <JournalSection>
        <TextJournal>Bem vindo/a ao seu diário</TextJournal>
        <Paragraph>
          Aqui você pode anotar seus pensamentos, sentimentos e experiências em
          um espaço seguro. Este diário foi desenvolvido para ajudá-lo a
          acompanhar seu progresso e refletir sobre sua jornada de saúde mental.
        </Paragraph>
        <Paragraph>
          Lembre-se, está tudo bem não estar bem. Escrever neste diário pode
          ajudá-lo a processar suas emoções e trabalhar para ser mais feliz e
          saudável.
        </Paragraph>
      </JournalSection>
      <JournalSection>
        <TabContainer>
          <TabButton onClick={() => handleTabClick("diary")}>Meu Diário</TabButton>
          <TabButton onClick={() => handleTabClick("history")}>Histórico</TabButton>
          <TabButton  onClick={() => handleTabClick("schedule")}>Agendamentos de Consulta</TabButton>
        </TabContainer>
        {activeTab === "diary" ? (
          <Diary />
        ) : activeTab === "history" ? (
            <JournalSectionHistory>
            <TextJournal>Histórico do Diário</TextJournal>
            <Paragraph>Aqui está o histórico das suas entradas:</Paragraph>
            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <span>{item.createdAt}</span>
                  <p>{item.txt}</p>
                </li>
              ))}
            </ul>
          </JournalSectionHistory>
        
        ):  (
            <JournalSection>
                <TextJournal>Agendamentos de Consulta</TextJournal>
                <Paragraph>
                    Aqui você pode visualizar seus agendamentos de
                    consulta marcados com seu médico.
                </Paragraph>
                <Paragraph>
                    Para marcar uma nova consulta, entre em contato
                    com seu médico diretamente.
                </Paragraph>
            </JournalSection>
        )}
      </JournalSection>
    </JournalMain>
  );
};

export default Journal;

