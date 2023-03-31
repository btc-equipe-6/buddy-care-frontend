import React, { useEffect, useState } from 'react'
import { PsychologistService } from 'services/PsychologistService'
import { Psychologist, PsychologistDetails } from 'types/api-types/psychologist'
import {
 AboutYou,
 AcademicInfo,
 Actions,
 Address,
 Bio,
 EditButton,
 InputContainer,
 ProfileSection,
 SaveButton,
 TextArea
} from './styles'

export const PsychologistProfile = () => {
 const [userProfile, setUserProfile] = useState({} as PsychologistDetails)
 const [isEditing, setIsEditing] = useState(false)
 const [control, setControl] = useState<boolean>()
const id =JSON.parse(localStorage.getItem("user") ?? "")?.id ?? "";
 const getUserProfile = async () => {
  const response = await PsychologistService().findById(id)
  setUserProfile(response)
 }

 const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
  try {
   e.preventDefault()
   const emailData =
    e.currentTarget.email.value === userProfile.email
     ? undefined
     : e.currentTarget.email.value

   const phoneNumberData =
    e.currentTarget.phoneNumber.value === userProfile.phoneNumber
     ? undefined
     : e.currentTarget.phoneNumber.value

   const data: Partial<Psychologist> = {
    name: e.currentTarget.Name.value,
    email: emailData,
    crp: e.currentTarget.crp.value,
    phoneNumber: phoneNumberData,
    age: parseInt(e.currentTarget.age.value),
    state: e.currentTarget.state.value,
    city: e.currentTarget.city.value,
    street: e.currentTarget.street.value,
    university: e.currentTarget.university.value,
    specialization: e.currentTarget.specialization.value,
    bio: e.currentTarget.bio.value
   }

   await PsychologistService().update(userProfile.id, data)
   setIsEditing(false)
   setControl(!control)
  } catch (error) {
   console.log(error)
  }
 }

 useEffect(() => {
  getUserProfile()
 }, [control])

 console.log(userProfile)

 return (
  <>
   <ProfileSection>
    <form onSubmit={handleUpdateProfile}>
     <AboutYou>
      <h2>Sobre Você</h2>

      <InputContainer>
       <label htmlFor='name'>Nome</label>
       <input
        type='text'
        name='Name'
        id='name'
        defaultValue={userProfile?.name}
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='email'>Email</label>
       <input
        type='text'
        name='email'
        id='email'
        defaultValue={userProfile?.email}
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='crp'>CRP</label>
       <input
        type='text'
        name='crp'
        id='crp'
        defaultValue={userProfile?.crp}
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='phoneNumber'>Número de telefone</label>
       <input
        type='text'
        defaultValue={userProfile?.phoneNumber}
        name='phoneNumber'
        id='phoneNumber'
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='age'>Idade</label>
       <input
        type='text'
        defaultValue={userProfile?.age}
        name='age'
        id='age'
        disabled={isEditing ? false : true}
       />
      </InputContainer>
     </AboutYou>

     <Address>
      <h2>Localização</h2>

      <InputContainer>
       <label htmlFor='state'>Estado</label>
       <input
        type='text'
        name='state'
        id='state'
        defaultValue={userProfile?.state}
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='city'>Cidade</label>
       <input
        type='text'
        name='city'
        id='city'
        defaultValue={userProfile?.city}
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='street'>Endereço</label>
       <input
        type='text'
        name='street'
        id='street'
        defaultValue={userProfile?.street}
        disabled={isEditing ? false : true}
       />
      </InputContainer>
     </Address>

     <AcademicInfo>
      <h2>Informações Acadêmicas</h2>
      <InputContainer>
       <label htmlFor='university'>Nome da Instituição</label>
       <input
        type='text'
        name='university'
        id='university'
        defaultValue={userProfile?.university}
        disabled={isEditing ? false : true}
       />
      </InputContainer>

      <InputContainer>
       <label htmlFor='specialization'>Sua área de especialidade</label>
       <input
        type='text'
        name='specialization'
        id='specialization'
        defaultValue={userProfile?.specialization}
        disabled={isEditing ? false : true}
       />
      </InputContainer>
     </AcademicInfo>

     <Bio>
      <h2>Breve descrição sobre você</h2>
      <TextArea
       minLength={1}
       maxLength={240}
       cols={5}
       rows={5}
       defaultValue={userProfile?.bio}
       disabled={isEditing ? false : true}
       name='bio'
      />
     </Bio>
     <Actions>
      <EditButton type='button' onClick={() => setIsEditing(!isEditing)}>
       Editar Perfil
      </EditButton>
      {isEditing && <SaveButton type='submit'>Salvar</SaveButton>}
     </Actions>
    </form>
   </ProfileSection>
  </>
 )
}
