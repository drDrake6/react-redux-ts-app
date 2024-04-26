import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '../pages/Error';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter: React.FC = () => {
    //const {isAuth, isLoading} = useContext(AuthContext);

    // if(isLoading){
    //     return <Loader/>
    // }

    return (
        <Routes>
            {privateRoutes.map((route) =>
                <Route 
                    key={route.path}
                    path={route.path} 
                    element={route.component}
                />) 
            }
        </Routes>
    );
};

export default AppRouter;