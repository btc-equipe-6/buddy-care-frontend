import { Routes, Route } from 'react-router-dom'
import { RoutePath } from 'types/routes'
import Home from 'pages/Home/index'
import Patients from 'pages/Patients'
import PatientDashboard from 'pages/PatientDashboard'
import Journal from 'pages/Journal'
import Report from 'pages/Reports/reports'
import MainForm from 'pages/Forms'
import Login from 'pages/Login/login'
import { PsychologistProfile } from 'pages/Psychologist-Profile'

const Router = () => {
 return (
  <Routes>
   <Route path={RoutePath.REGISTER} element={<MainForm />} />
   <Route path={RoutePath.LOGIN} element={<Login />} />
   <Route path={RoutePath.PSYCHOLOGIC_DASHBOARD} element={<Home />} />
   <Route path={RoutePath.PATIENTS} element={<Patients />} />
   <Route path={RoutePath.PATIENTS_DASHBOARD} element={<PatientDashboard />} />
   <Route path={RoutePath.diary} element={<Journal />} />
   <Route path={RoutePath.Report} element={<Report />} />
   <Route
    path={RoutePath.psychologist_profile}
    element={<PsychologistProfile />}
   />
  </Routes>
 )
}

export default Router
