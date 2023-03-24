import { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Patient } from 'types/api-types/patients'
import { AllPatients } from 'services/PatientService'
import './creat.css'
function Creat() {
 const [newPatient, setNewPatient] = useState<Patient>({} as Patient)
 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  try {
    const createdPatient = await AllPatients.CreatePatient(newPatient)
   if (!createdPatient) {
    alert('dados incorretos')
   } else {
    ;<Link to='/psychologist' style={{ color: 'transparent' }}></Link>
   }
  } catch (error) {}
 }

 return (
  <section className='creatArea'>
   <form className='formCreate' onSubmit={handleSubmit}>
    <input
     className='creatInput'
     placeholder='name'
     onChange={event => {
      setNewPatient({ ...newPatient, name: event.target.value })
      console.log('aoba', newPatient)
     }}></input>
    <input
     className='creatInput'
     placeholder='email'
     type='email'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, email: event.target.value })
      console.log('aoba', newPatient)
     }}></input>
    <input
     className='creatInput'
     placeholder='senha'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, password: event.target.value })
      console.log('aoba', newPatient)
     }}></input>
    <input
     className='creatInput'
     placeholder='Idade'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, age: parseInt(event.target.value) })
      console.log('aoba', newPatient)
     }}></input>
    <input
     className='creatInput'
     placeholder='Genero'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, gender: event.target.value })
      console.log('aoba', newPatient)
     }}></input>
    <input
     className='creatInput'
     placeholder='Numero de Telefone'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, phoneNumber: event.target.value })
      console.log('aoba', newPatient)
     }}></input>
    <input
     className='creatInput'
     placeholder='Telefone de emergencia'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, emergencyContact: event.target.value })
      console.log('aoba', newPatient)
     }}></input>
    <button>sign in</button>
   </form>
  </section>
 )
}
export default Creat
