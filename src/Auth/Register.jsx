import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    
    const login = () => {
        axios.post('http://localhost:8000/api/register', {
            name: name,
            job: job,
            email: email,
            password: password
        }).then((result) => {
            console.log(result);
            // if (result.data.message === true) {
            //     localStorage.setItem("auth", JSON.stringify(result.data.token));
            // window.location.reload();
            // }
            navigate("/auth/login");
            // console.log(result.data.token);
            // localStorage.setItem('auth',JSON.stringify(result.data.token));
            // setToken(localStorage.getItem('auth'));
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <Container fluid>
                {/* <div className="flex justify-content-center"> */}
                <div className=" d-flex justify-content-around align-items-center" style={{height : "100vh"}}>
                <div>

                <center>
                    <h4>Register</h4>
                </center>
                {/* </div> */}

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" onChange={e => setName(e.target.value)} className="form-control" style={{width:"75vw"}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Job</label>
                    <input type="email" onChange={e => setJob(e.target.value)} className="form-control" style={{width:"75vw"}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" style={{width:"75vw"}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" style={{width:"75vw"}} onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <div className="mb-3 d-grid gap-2">
                    <Link to="/auth/login" className="btn btn-link" type="button">Login</Link>
                    {/* <button className="btn btn-primary" type="button">Button</button> */}
                </div>
                <div className="d-grid gap-2">
                    <button onClick={login} className="btn btn-primary" type="button">Register</button>
                    {/* <button className="btn btn-primary" type="button">Button</button> */}
                </div>

                </div>
                </div>


            </Container>
        </>
    )
}
