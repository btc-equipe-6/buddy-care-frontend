import Diary from 'components/text area/diary'
 const Journal = () => {
return (
    <main>
		<section>
			<h2>Bem vindo/a ao seu diário</h2>
			<p>Aqui você pode anotar seus pensamentos, sentimentos e experiências em um espaço seguro. Este diário foi desenvolvido para ajudá-lo a acompanhar seu progresso e refletir sobre sua jornada de saúde mental.</p>
			<p>Lembre-se, está tudo bem não estar bem. Escrever neste diário pode ajudá-lo a processar suas emoções e trabalhar para ser mais feliz e saudável.</p>
		</section>

		<section>
			<h2>Meu Diário</h2>
			<p>Escreva seus sentimentos e pensamentos abaixo:</p>
			<Diary/>
		</section>
	</main>
        
)
}
export default Journal