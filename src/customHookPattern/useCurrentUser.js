import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function useCurrentUser() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user')
            console.log(response)
            setUser(response.data)
        })();
    } , [])

  return user;
}
