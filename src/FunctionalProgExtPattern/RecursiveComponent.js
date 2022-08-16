import React from 'react'

const isObject = x => typeof x === 'object' && x !== null;

export default function RecursiveComponent({data}) {
    if(isObject(data)) {
        const pairs = Object.entries(data);
        return (
            <div>
                {pairs.map(([key, value]) => (
                    <li key={key}>
                        {key}:
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                ))}
            </div>
        )
    } else {
        return <li>{data}</li>
    }
}
