import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import { useHistory } from "react-router-dom";

export default function Edit(props) {
    let { id } = useParams();
    let history = useHistory();

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [userId, setUserId] = useState('');
    const [users, setUsers] = useState([]);
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3000/sessions/${id}/edit`, options)
        .then(res => res.json())
        .then(
          (result) => {
            setUserId(result.user_id)
            setStart(result.start)
            setEnd(result.end) 
            console.log(start)
        })

        fetch(`http://localhost:3000/users/`, options)
        .then(res => res.json())
        .then(
          (result) => {
            setUsers(result);
        })

    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: new URLSearchParams({
                "session[start]": start,
                "session[end]": end,
                "session[user_id]": userId
            })
        };
        fetch(`http://localhost:3000/sessions/${id}`, options)
        .then(res => res.json())
        .then(
          (result) => {
           console.log(result)
           history.push('/')
        })
    }

    return (
        <section className="section">
        <h1> Edit Session {userId} </h1>
        <form>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Start Time</label>
              <input type="datetime-local" id="start" name="start" value={start} onChange={e => setStart(e.target.value)} />
            </div>
            <div className="form-group col-6">
              <label>End Time</label>
              <input type="datetime-local" id="end" name="end" value={end} onChange={e => setEnd(e.target.value)}/>
            </div>
            <select className="form-control col-8 ml-2" value={userId} onChange={e => setUserId(e.target.value)}>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.username}</option> 
                ))}
            </select>
          </div>
          <button id="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    );
}