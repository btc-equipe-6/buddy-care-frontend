import Api from 'helpers/Api/axios-config'
import {
 InputCreatePsychologist,
 InputUpdatePsychologist,
 Psychologist,
 PsychologistDetails
} from 'types/api-types/psychologist'



export function PsychologistService() {
 async function create(data: InputCreatePsychologist) {
  const { name, email, password, crp, phoneNumber } = data
  const request = await Api.post<Psychologist>('psychologist', {
   name,
   email,
   password,
   crp,
   phoneNumber
  })

  return request.data
 }

 async function findAll() {
  const request = await Api.get<Psychologist[]>('psychologist')
  return request.data
 }

 async function findById(id: string) {
  const request = await Api.get<PsychologistDetails>(`psychologist/${id}`)
  return request.data
 }

 async function update(id: string, data: InputUpdatePsychologist) {
  const request = await Api.patch<Psychologist>(`psychologist/${id}`, data)
  return request.data
 }

 return {
  create,
  findAll,
  findById,
  update
 }
}
