import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function useUser(userId) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            console.log(response)
            setUser(response.data)
        })();
    } , [userId])

  return user;
}
