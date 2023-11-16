import React from 'react'
import Cookies from 'js-cookie'
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRouter = ({element:Element}) => {
  const jwtToken = Cookies.get('jwt_token');

  const navigate = useNavigate()

  if (jwtToken === undefined) {
    navigate('/login')
  }
  return <Route element={<Element />}/>
}

export default ProtectedRouter