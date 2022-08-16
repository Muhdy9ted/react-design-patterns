import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function withUserHOC(Component, userId) {
  return (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            console.log(response)
            setUser(response.data)
        })();
    }, [])
    return user ? <Component {...props} user={user} /> : <p>Loading...</p>
  }
}
