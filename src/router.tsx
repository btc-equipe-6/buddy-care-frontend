import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";
import Patients from 'pages/Patients';
import PatientDashboard from 'pages/PatientDashboard';
import Journal from 'pages/Journal/Jornal';
import Report from 'pages/Reports/reports';
import App from '../src/pages/Form/creat';


const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<App />} />
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.PATIENTS} element={<Patients />} />
            <Route path={RoutePath.PATIENTS_DASHBOARD} element={<PatientDashboard />} />
            <Route path={RoutePath.diary} element={<Journal/>} />
            <Route path={RoutePath.Report} element={<Report/>} />


        </Routes>
    );
}

export default Router;