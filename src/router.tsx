import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";
import Patients from 'pages/Patients';


const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.PATIENTS} element={<Patients />} />
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}

export default Router;