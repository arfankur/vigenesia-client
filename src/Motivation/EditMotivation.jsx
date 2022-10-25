import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import authHeader from '../auth-header';

export default function EditMotivation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [motivation, setMotivation] = useState("");
    function handleChangeMotivation(e) { setMotivation(e.target.value) }

    useEffect(() => {
        getmotivation();

        return getAuth
    }, [id])

    const getAuth = () => {
        axios.get('http://localhost:8000/api/user',
            { headers: authHeader() })
            .then((result) => {
                // setIdUser(result.data.id);
            }).catch((err) => {
                // console.log(err);
                navigate('/login');
                // window.location.reload();
            });
    }
    function updateMotivation() {
        axios.put(`http://localhost:8000/api/motivation/${id}`, {
            motivation: motivation
        },{headers:authHeader()}).then((result) => {
            navigate('/motivations');

        }).catch((err) => {
            console.log(err);
        });
    }

    function getmotivation() {
        axios.get(`http://localhost:8000/api/motivation/${id}`,{headers:authHeader()}).then((result) => {
            // setId(result.data.id);
            setMotivation(result.data.motivation);
            console.log(motivation);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <Container fluid>
                <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                    <div>
                        <center>
                            <h4>Edit Motivation : {motivation.id}</h4>
                        </center>
                        {/* <p for="exampleFormControlTextarea1" class="form-label">Motivation</p> */}
                        <div className='mb-3'>
                            <textarea style={{ width: '75vw' }} className="form-control" id="exampleFormControlTextarea1" value={motivation} onChange={handleChangeMotivation}>{motivation}</textarea>
                        </div>
                        <div className='d-grid gap-2'>
                            <button onClick={() => updateMotivation} className='btn btn-primary btn-sm'>Update</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
