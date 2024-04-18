import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers]=useState([])
    return(
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))
        },[]),
        <div>
            <h1>Users:{users.length}</h1>
        </div>
    );
}

export default Users;