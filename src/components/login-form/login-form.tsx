import { FormEvent, useContext, useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { InputLogin, StyledForm, StyledLoginForm } from './styles'
import { apiLogin } from '../../services/LoginService'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../loading/loading'
import { AuthContext } from 'context/AuthContext'

export function LoginForm() {
 const [showPassword, setShowPassword] = useState<boolean>(false)
 const [loading, setLoading] = useState<boolean>(false)
 const [error, setError] = useState<boolean>(false)
 const { setLoggedIn, setRole, setUserId } = useContext(AuthContext);


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
  const userData = await apiLogin.login(loginPayload)

  if (userData) {
   setLoggedIn(true)
   const role = userData.user.role
   setLoading(false)
   setUserId(userData.user.id);
   if (role === 'psychologist') {
   setRole("psychologist")
    navigate(`/psychologist/${userData.user.id}`)
   } else {
   setRole("patient")
      navigate(`/patient/${userData.user.id}`)

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
      <InputLogin placeholder='Seu email' name='email' type='email' required />
      <div>
       <InputLogin
        placeholder='Sua senha'
        type={showPassword ? 'text' : 'password'}
        name='password'
        required
       />
       <button type='button' onClick={handleShowPassword}>
        {showPassword ? <BsEyeSlashFill size={25} /> : <BsEyeFill size={25} />}
       </button>
      </div>
      <button type='submit'>Entrar</button>
     </StyledForm>
     <h3 onClick={() => {
        navigate('/register')
       }}> Ainda não tem cadastro? Clique aqui </h3>
    </StyledLoginForm>
   )}
  </>
 )
}
