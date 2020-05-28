import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <section class="section">
      <h1> Listing Sessions </h1>
      <Link to="/sessions/new">Add a New Session</Link>
       <table class="table">
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
          <tr>
          <td>1</td>
          <td>2</td>
          <td>24/5/2020</td>
          <td>25/5/2020</td>
          <td>
            <Link to={`/sessions/${1}/edit`}>Edit</Link>
          </td>
          </tr>
        </tbody>
       </table>
   </section>
  );
}