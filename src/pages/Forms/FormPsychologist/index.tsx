import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { PsychologistService } from 'services/PsychologistService'
import { InputCreatePsychologist } from 'types/api-types/psychologist'
import { CreatInput, FormCreate } from '../styles'

function CreatPsychologist() {
 const [newPsychologist, setNewPsychologist] = useState<InputCreatePsychologist>({} as InputCreatePsychologist)
 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  try {
   const createdPsychologist = await PsychologistService().create(newPsychologist)
   if (!createdPsychologist) {
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
      setNewPsychologist({ ...newPsychologist, name: event.target.value })
      console.log('aoba', newPsychologist)
     }}></CreatInput>
    <CreatInput
     placeholder='email'
     type='email'
     required
     onChange={event => {
      setNewPsychologist({ ...newPsychologist, email: event.target.value })
      console.log('aoba', newPsychologist)
     }}></CreatInput>
    <CreatInput
     placeholder='senha'
     required
     onChange={event => {
      setNewPsychologist({ ...newPsychologist, password: event.target.value })
      console.log('aoba', newPsychologist)
     }}></CreatInput>
    <CreatInput
     placeholder='Crp'
     required
     onChange={event => {
      setNewPsychologist({ ...newPsychologist, crp: event.target.value })
      console.log('aoba', newPsychologist)
     }}></CreatInput>
    <CreatInput
     placeholder='Numero de Telefone'
     required
     onChange={event => {
      setNewPsychologist({ ...newPsychologist, phoneNumber: event.target.value })
      console.log('aoba', newPsychologist)
     }}></CreatInput>
    <button>sign in</button>
    <Link to='/' style={ { color: 'transparent' } }>
      <h3>Já tenho login</h3>
    </Link>
   </FormCreate>
 )
}
export default CreatPsychologist;
