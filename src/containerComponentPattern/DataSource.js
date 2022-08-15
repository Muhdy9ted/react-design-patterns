import React, {useState, useEffect} from 'react'

export default function DataSource({getDataFunc = () => {}, resourceName, children}) {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async() => {
            const data = await getDataFunc();
            setState(data)
        })();
    }, [getDataFunc])

  return state ? (
    <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, {[resourceName]: state})
            }

            return child;
        })}
    </>
  ) : <p>Loading...</p>
}
