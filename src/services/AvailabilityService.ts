import Api from 'helpers/Api/axios-config'
import {
 Availability,
 InputCreateAvailability,
 InputUpdateAvailability
} from 'types/api-types/availability'

export function AvailabilityService() {
 async function create(psychologistId: string, data: InputCreateAvailability) {
  const { dayOfWeek, startTime, endTime, location } = data
  const request = await Api.post<Availability>(
   `psychologist/${psychologistId}/availability`,
   { dayOfWeek, startTime, endTime, location }
  )

  return request.data
 }

 async function update(
  psychologistId: string,
  availabilityId: string,
  data: InputUpdateAvailability
 ) {
  const { dayOfWeek, startTime, endTime, location } = data
  const request = await Api.patch<Availability>(
   `psychologist/${psychologistId}/availability/${availabilityId}`,
   { dayOfWeek, startTime, endTime, location }
  )

  return request.data
 }

 async function remove(psychologistId: string, availabilityId: string) {
  const request = await Api.delete(
   `psychologist/${psychologistId}/availability/${availabilityId}`
  )

  return request.data
 }

 return {
  create,
  update,
  remove
 }
}
