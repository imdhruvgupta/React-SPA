import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Home() {
    
    const [sessions, setSessions] = useState([]); 
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    useEffect(() => {
        fetch(`http://localhost:3000/sessions`, options)
        .then(res => res.json())
        .then(
          (result) => {
            setSessions(result);
        })
    }, [])
    
    return (
        <section className="section">
        <h1> Listing Sessions </h1>
        <Link to="/sessions/new">Add a New Session</Link>
        <table className="table">
        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Interviewee Id</th>
        <th scope="col">Start Time</th>
        <th scope="col">End Time</th>
        <th scopt="col"></th>
        </tr>
        </thead>
        <tbody>
        {sessions.map(session => (
            <tr key={session.id}>
            <td>{session.id}</td>
            <td>{session.user_id}</td>
            <td>{session.start}</td>
            <td>{session.end}</td>
            <td>
            <Link to={`/sessions/${session.id}/edit`}>Edit</Link>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </section>
        );
    }