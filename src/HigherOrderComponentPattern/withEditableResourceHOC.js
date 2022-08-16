import React, {useState, useEffect} from 'react'
import axios from 'axios'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default function withEditableResourceHOC(Component, resourcePath, resourceName) {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourcePath)
            console.log(response)
            setOriginalData(response.data)
            setData(response.data)
        })();
    }, [])

    const onChange = (changes) => {
        setData({...data, ...changes});
    }

    const onSave = async () => {
        const response = await axios.post(resourcePath, {[resourceName]: data});
        console.log(response)
        setOriginalData(response.data);
        setData(response.data);
    }

    const onReset = () => {
        setData(originalData);
    }

    const resourceProps = {
        [resourceName]: data,
        [`onChange${capitalize(resourceName)}`]: onChange,
        [`onSave${capitalize(resourceName)}`]: onSave,
        [`onReset${capitalize(resourceName)}`]: onReset,
    }

    return data ? <Component {...props} {...resourceProps} /> : <p>Loading...</p>
  }
}
