import { FormEvent, useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { StyledForm, StyledLoginForm } from './styles'
import { apiLogin } from '../../services/LoginService'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../loading/loading'

export function LoginForm() {
 const [showPassword, setShowPassword] = useState<boolean>(false)
 const [loading, setLoading] = useState<boolean>(false)
 const [error, setError] = useState<boolean>(false)

 const navigate = useNavigate()

 function handleShowPassword() {
  setShowPassword(!showPassword)
 }

 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setLoading(true)

  const loginPayload = {
   email: e.currentTarget.email.value,
   password: e.currentTarget.password.value
  }
  console.log(loginPayload)
  const userData = await apiLogin.login(loginPayload)
  console.log(apiLogin)

  if (userData) {
   const role = userData.user.role
   setLoading(false)
   if (role === 'psychologist') {
    navigate('/psychologist')
   } else {
    navigate('/patient/1')
   }
  } else {
   setLoading(false)
   navigate('/')
   setError(true)
   return
  }
 }

 return (
  <>
   {loading ? (
    <Loading />
   ) : (
    <StyledLoginForm>
     <h2>Login</h2>
     <StyledForm onSubmit={handleSubmit} error={error}>
      <input placeholder='Seu email' name='email' type='email' required />
      <div>
       <input
        placeholder='Sua senha'
        type={showPassword ? 'text' : 'password'}
        name='password'
        required
       />
       <button type='button' onClick={handleShowPassword}>
        {showPassword ? <BsEyeSlashFill size={25} /> : <BsEyeFill size={25} />}
       </button>
      </div>
      <button
       onClick={() => {
        navigate('/creat')
       }}>
       Cadastrar
      </button>
      <button type='submit'>Entrar</button>
     </StyledForm>
    </StyledLoginForm>
   )}
  </>
 )
}
