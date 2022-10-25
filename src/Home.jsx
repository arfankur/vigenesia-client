import axios from 'axios'
import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import App from './App'
import authHeader from './auth-header'
import Login from './Auth/Login'
import Register from './Auth/Register'
import AddMotivation from './Motivation/AddMotivation'
import EditMotivation from './Motivation/EditMotivation'
// import Register from './Auth/Register'
import Motivations from './Motivation/Motivations'
import NotFound from './NotFound'

export default function Home() {

    let navigate = useNavigate();

    const getAuth = () => {
        axios.get('http://localhost:8000/api/user',
            { headers: authHeader() })
            .then((result) => {
                // setIdUser(result.data.id);
                // console.log(idUser);
                // console.log(result.data);
                // console.log(result.data.id);
            }).catch((err) => {
                // console.log(err);
                navigate('/auth/login');
                // window.location.reload();
            });
    }
 
    
 useEffect(() => {
   getAuth();
 
//    return () => {
//      second
//    }
 }, [])
 
    return (
        <React.Fragment>
            {/* <p>HOme</p> */}
          {/* <p>Home</p> */}
          
                <Routes>
                
                    <Route path="/" element={<NotFound />} />
                    <Route path="/motivations" element={<Motivations />} />
                    <Route path="/motivation/add" element={<AddMotivation/>} />
                    <Route path="/motivation/edit/:id" element={<EditMotivation/>} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/login" element={<Login />} />
                    {/* <Route path="/auth/login" element={<Login />} /> */}
                    {/* <Route path="/auth/register" element={<Register />} /> */}
                    

                </Routes>
            {/* </Container> */}
          
        </React.Fragment>
    )
}