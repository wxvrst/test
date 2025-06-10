import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NoMatchPage from '../pages/NoMatchPage';
import SubPage from '../pages/SubPage';
import SupPage from '../pages/SupPage';

function AppRoutes() {
    const navigationRoutes = [
        { path: 'test/', element: <MainPage /> },
        { path: 'test/sub', element: <SubPage /> },
        { path: 'test/sup', element: <SupPage /> },
        { path: 'test/*', element: <NoMatchPage /> },

    ]
    return (
        <Routes>
            {navigationRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
        </Routes>
    );
}
export default AppRoutes;