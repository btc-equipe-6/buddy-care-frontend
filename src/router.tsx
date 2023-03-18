import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";
import Patients from 'pages/Patients';
import PatientDashboard from 'pages/PatientDashboard';
import App from 'pages/Login/src/App';


const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<App />} />
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.PATIENTS} element={<Patients />} />
            <Route path={RoutePath.PATIENTS_DASHBOARD} element={<PatientDashboard />} />
        </Routes>
    );
}

export default Router;