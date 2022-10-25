import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authHeader from '../auth-header';
import Navigationbar from '../Components/NavigationBar'


export default function Motivations() {

    const [motivations, setMotivations] = useState([]);
    let navigate = useNavigate();
    const [showMotivationBy, setShowMotivationBy] = useState("by-auth");
    const [idUser, setIdUser] = useState(-1);
    const hanldeShowMotivationBy = e => setShowMotivationBy(e.target.value);
    const getAuth = () => {
        axios.get('http://localhost:8000/api/user',
            { headers: authHeader() })
            .then((result) => {
                setIdUser(result.data.id);
                console.log(idUser);
                console.log(result.data);
                console.log(result.data.id);
            }).catch((err) => {
                // console.log(err);
                navigate('/auth/login');
                // window.location.reload();
            });
    }

    useEffect(() => {
        // return 
        getAuth();
        if (showMotivationBy === "by-auth") {
            getMotivationByAuth();

        }
        if (showMotivationBy === "all") {
            getMotivation();
        }
        // (showMotivationBy === "all") ?? getMotivation()
        // return () => {
            
        // } 
        // return 

    }, [showMotivationBy]);

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

    function getMotivation() {
        axios.get('http://localhost:8000/api/motivations', { headers: authHeader() }).then((result) => {
            setMotivations(result.data);
            console.log(result.data);
            // console.log(motivations);
            console.log("all");
        }).catch((err) => {
            console.log(err);
        });
    }

    function getMotivationByAuth() {
        axios.get('http://localhost:8000/api/motivations-by-auth', { headers: authHeader() }).then((result) => {
            setMotivations(result.data);
            console.log(result.data);
            // console.log(motivations);
            console.log("by auth");
        }).catch((err) => {
            console.log(err);
        });
    }

    const deleteMotivation = (id) => {
        axios.delete(`http://localhost:8000/api/motivation/${id}`, { headers: authHeader() }).then((result) => {
            alert('Motivation deleted');
            window.location.reload()
        }).catch((err) => {

        });
    }

    const chechkX = (x) => {
        console.log(x);
    }

    return (
        <>
            <Navigationbar />
            <Container fluid>
                <h4 className='font-bold'>Motivations</h4>
                <div className="form-check form-check-inline">
                    <input
                        onChange={hanldeShowMotivationBy}
                        value="by-auth"
                        checked={showMotivationBy === "by-auth"}
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">By Auth</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        onChange={hanldeShowMotivationBy}
                        value="all"
                        checked={showMotivationBy === "all"}
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">All</label>
                </div>
                {/* <span className='bg-primary'>
                {showMotivationBy}
                </span> */}
                {/* <br /> */}
                <Link
                    // className='btn btn-sm btn-primary' 
                    to="/motivation/add">
                    <button className="btn btn-sm btn-primary">
                        Add Motivation
                    </button>
                </Link>
                <br />
                <br />
                <div style={{ overflowX: 'auto' }}>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Motivation</th>
                                <th scope="col">Written By</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col" colSpan={2}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {motivations.length > 0 ?
                                motivations.map(function (x, i) {
                                    return (
                                        <>
                                            {chechkX(x.user_id)}
                                            <tr key={x.id}>
                                                <td>{x.id}</td>
                                                <td>{x.motivation}</td>
                                                <td>{x.user_id}</td>
                                                <td>{x.created_at}</td>
                                                <td>{x.updated_at}</td>
                                                <td>
                                                    {idUser === x.user_id &&
                                                        <Link className='btn btn-sm btn-primary' to={`/motivation/edit/${x.id}`}>
                                                            Edit
                                                        </Link>
                                                    }
                                                </td>
                                                <td>
                                                    {idUser === x.user_id &&
                                                        <button
                                                            onClick={() => deleteMotivation(x.id)}
                                                            className='btn btn-sm btn-primary'>
                                                            Delete
                                                        </button>
                                                    }
                                                </td>
                                            </tr>
                                            {/* <tr key={x.id}>
                                            <td>x.id</td>
                                            <td>x.motivation</td>
                                        </tr> */}
                                        </>
                                    )
                                })
                                : (
                                    <tr>
                                        <td colSpan={
                                            motivations.length > 0 ? 1 : 6
                                        }>
                                            <h4 className='text-center'>Motivations Empty</h4>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    )
}
