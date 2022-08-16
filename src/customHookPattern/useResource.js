import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function useResource(resourceUrl) {

    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            console.log(response)
            setResource(response.data)
        })();
    } , [resourceUrl])

  return resource;
}
