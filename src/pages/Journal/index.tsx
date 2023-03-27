import Diary from 'components/Diary'
import { JournalMain, JournalSection, Paragraph, TextJournal } from './styles'

const Journal = () => {
 return (
  <JournalMain>
   <JournalSection>
    <TextJournal>Bem vindo/a ao seu diário</TextJournal>
    <Paragraph>
     Aqui você pode anotar seus pensamentos, sentimentos e experiências em um
     espaço seguro. Este diário foi desenvolvido para ajudá-lo a acompanhar seu
     progresso e refletir sobre sua jornada de saúde mental.
    </Paragraph>
    <Paragraph>
     Lembre-se, está tudo bem não estar bem. Escrever neste diário pode ajudá-lo
     a processar suas emoções e trabalhar para ser mais feliz e saudável.
    </Paragraph>
   </JournalSection>
   <JournalSection>
    <TextJournal>Meu Diário</TextJournal>
    <Paragraph>Escreva seus sentimentos e pensamentos abaixo:</Paragraph>
    <Diary />
   </JournalSection>
  </JournalMain>
 )
}
export default Journal
