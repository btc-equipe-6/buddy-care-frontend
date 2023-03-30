import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { AllPatients } from 'services/PatientService'
import { Patient } from 'types/api-types/patients'
import { CreatInput, FormCreate } from '../styles'

function CreatPatient() {
 const [newPatient, setNewPatient] = useState<Patient>({} as Patient)
 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  try {
   const createdPatient = await AllPatients.CreatePatient(newPatient)
  console.log(newPatient)
   if (!createdPatient) {
    alert('dados incorretos')
   } else {
    ;<Link to='/home' style={{ color: 'transparent' }}></Link>
   }
  } catch (error) {}
 }

 return (
   <FormCreate onSubmit={handleSubmit}>
    <CreatInput
     placeholder='name'
     onChange={event => {
      setNewPatient({ ...newPatient, name: event.target.value })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <CreatInput
     placeholder='email'
     type='email'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, email: event.target.value })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <CreatInput
     placeholder='senha'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, password: event.target.value })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <CreatInput
     placeholder='Idade'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, age: parseInt(event.target.value) })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <CreatInput
     placeholder='Genero'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, gender: event.target.value })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <CreatInput
     placeholder='Numero de Telefone'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, phoneNumber: event.target.value })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <CreatInput
     placeholder='Telefone de emergencia'
     required
     onChange={event => {
      setNewPatient({ ...newPatient, emergencyContact: event.target.value })
      console.log('aoba', newPatient)
     }}></CreatInput>
    <button>sign in</button>
    <h3>Já tenho login</h3>
   </FormCreate>
 )
}
export default CreatPatient;
