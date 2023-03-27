import '../../components/Diary/styles.ts'
const report = () => {
 return (
  <section>
   <h2>Create Report</h2>
   <form action=''>
    <textarea id='journal-entry' rows={parseInt('10')} cols={50}></textarea>
    <button id='submit-entry'>enviar</button>
   </form>
  </section>
 )
}

export default report
