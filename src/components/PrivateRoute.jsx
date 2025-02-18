import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('jwtToken');

    // Eğer token yoksa, login sayfasına yönlendir
    if (!token) {
        return <Navigate to="/adminlogin" replace />;
    }

    // Eğer token varsa, admin sayfasına erişim sağlanır
    return children;
};

export default PrivateRoute;

