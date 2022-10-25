import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { json, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authHeader from '../auth-header';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setUserId] = useState(-1);
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const login = () => {
        axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password
        }).then((result) => {
            console.log(result);
            // if (result.data.message === true) {
            localStorage.setItem("auth", JSON.stringify(result.data.token));
            navigate("/motivations");
            window.location.reload();
            // }
            console.log(localStorage.getItem('auth'));
            console.log(localStorage.getItem('auth'));
            console.log(JSON.parse(localStorage.getItem('auth')));
            getAuth();
            console.log(authHeader());
        }).catch((err) => {
            console.log(err);
        });
    }
    const getAuth = () => {
        axios.get('http://localhost:8000/api/user', { headers: authHeader() }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    // const authHeader = () =>{
    //     // const token = json
    // }

    return (
        <>
            <Container fluid>
                <div className=" d-flex justify-content-around align-items-center" style={{ height: "100vh" }}>
                    {/* </div> */}
                    <div>
                        <center>
                            <h4>Login</h4>
                        </center>
                        <form>

                            <div className="mb-3">
                                <p htmlFor="exampleInputEmail1" className="form-label">Email address</p>
                                <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" style={{ width: '75vw' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <p htmlFor="exampleInputPassword1" className="form-label">Password</p>
                                <input type="password" className="form-control" style={{ width: '75vw' }} onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" />
                            </div>
                            {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                            <div className="mb-3 d-grid gap-2">
                                <Link to="/auth/register" className="btn btn-link" type="button" style={{textDecoration:"none"}}>Register</Link>
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={login} className="btn btn-primary" type="button">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>


            </Container>
        </>
    )
}
