import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function withEditableUserHOC(Component, userId) {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            console.log(response)
            setOriginalUser(response.data)
            setUser(response.data)
        })();
    }, [])

    const onChangeUser = (changes) => {
        setUser({...user, ...changes});
    }

    const onSaveUser = async () => {
        const response = await axios.post(`/users/${userId}`, {user});
        console.log(response)
        setOriginalUser(response.data);
        setUser(response.data);
    }

    const onResetUser = () => {
        setUser(originalUser);
    }

    return user ? <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onResetUser} /> : <p>Loading...</p>
  }
}
