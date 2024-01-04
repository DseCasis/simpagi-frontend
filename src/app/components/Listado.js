import Axios from "axios";
import React, { useEffect, useState } from "react";

const Listado = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('https://localhost:8000/api/users')
            .then(response => {
                setUsers(response.data)
            })
    })

  return (
    <div>
        <h1>Listado de usuarios</h1>
        <ul>
            {users.map((user) => (
            <li key={user.id}>
                {user.name} {user.email}
            </li>
            ))}
        </ul>
    </div>
  );
};

export default Listado;
