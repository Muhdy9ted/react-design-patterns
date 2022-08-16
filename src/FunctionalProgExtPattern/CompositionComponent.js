import React from 'react'

export const Button = ({size, color, text, ...props}) => {
    return (
        <button {...props} style={{padding: size === 'large' ? '32px' : '8px', fontSize: size === 'large' ? '32px' : '16px', backgroundColor: color}}>
            {text}
        </button>
    )
}

export const DangerButton = props => {
    return <Button color='red' {...props} />
}

export const BigSuccessButton = props => {
    return <Button size='large' color='green' {...props} />
} 
