 import  './diary.css'
 const diary = () => {
return (
    <form action="">
    <textarea id="journal-entry" rows={parseInt("10")} cols={50}></textarea>
    <button id="submit-entry">enviar</button>
</form>
)
}

export default diary