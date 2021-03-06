import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions';

const New = ({dispatch, users}) => {
    const history = useHistory();

    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [userId, setUserId] = useState('');

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    function handleSubmit(e) {
        e.preventDefault();
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: new URLSearchParams({
                "session[start]": start,
                "session[end]": end,
                "session[user_id]": userId
            })
        };
        fetch(`http://localhost:3000/sessions/`, options)
        .then(res => res.json())
        .then(
          (result) => {
           console.log(result)
           history.push('/')
        })
    }

    return (
      <section className="section">
        <h1> Add a New Session </h1>
        <form>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Start Time</label>
              <input type="datetime-local" id="start" name="start" onChange={e => setStart(e.target.value)} />
            </div>
            <div className="form-group col-6">
              <label>End Time</label>
              <input type="datetime-local" id="end" name="end" onChange={e => setEnd(e.target.value)}/>
            </div>
            <select className="form-control col-8" onChange={e => setUserId(e.target.value)}>
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

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.sessions.loading
})

export default connect(mapStateToProps)(New)