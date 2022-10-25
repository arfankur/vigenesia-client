import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import authHeader from '../auth-header';

export default function AddMotivation() {
    const [motivation, setMotivation] = useState("");
    let navigate = useNavigate();
    function handleChangeMotivation(e) { setMotivation(e.target.value) }
    function submitMotivation() {
        axios.post('http://localhost:8000/api/motivation', 
        {
            motivation: motivation
        },
        {headers:authHeader()}
        ).then((result) => { 
            navigate('/motivations');
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }
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

    useEffect(() => {
        return getAuth();

    }, []);
    return (
        <>
            <Container fluid>
                <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
                    <div>
                        <center>
                            <h4>Add Motivation</h4>
                        </center>
                        {/* <p for="exampleFormControlTextarea1" class="form-label">Motivation</p> */}
                        <div className='mb-3'>
                            <textarea style={{width:'75vw'}} class="form-control" id="exampleFormControlTextarea1" value={motivation} onChange={handleChangeMotivation}>{motivation}</textarea>
                        </div>
                        <div className='d-grid gap-2'>
                            <button onClick={() => submitMotivation} className='btn btn-primary btn-sm'>Post</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
