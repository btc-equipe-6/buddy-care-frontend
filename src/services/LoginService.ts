import Api from 'helpers/Api/axios-config'
import { LoginRequest } from '../types/api-types/login'
import swal from 'sweetalert'

function handleError(text: string, description: string) {
 swal({
  title: text,
  text: description,
  icon: 'warning',
  timer: 5000
 })
}

export const apiLogin = {
 // login de usuario
 login: async ({ email, password }: LoginRequest) => {
  try {
   const response = await Api.post('/auth', { email, password })
   localStorage.setItem('token', response.data.token)
   localStorage.setItem("user", JSON.stringify(response.data.user))
   console.log(response.data)
   return response.data
   
  } catch (err: any) {
   handleError('Erro ao efetuar login', '')
  }
 }
}
