import React from 'react'
import Cookies from 'js-cookie'
import { Route, useNavigate } from 'react-router-dom'
import Home from '../Home'


const ProtectedRoute = () => {
    const navigator = useNavigate()

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
       return navigator('/login')
    } 
    return <Route element={<Home/>} />
}

export default ProtectedRoute;