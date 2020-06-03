import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchSessions} from '../actions/sessionsActions'; 

const Home = ({dispatch, sessions, loading}) => {
   
    useEffect(() => {
        dispatch(fetchSessions());
    }, [dispatch])

    const renderSessions = () => {
        if (loading) return <p>Loading sessions...</p>
        return (
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
        )
    }
    
    return (
        <section className="section">
        <h1> Listing Sessions </h1>
        <Link to="/sessions/new">Add a New Session</Link>
        {renderSessions()}
        </section>
    );
}

const mapStateToProps = state => ({
    sessions: state.sessions.sessions,
    loading: state.sessions.loading
})
  
export default connect(mapStateToProps)(Home)