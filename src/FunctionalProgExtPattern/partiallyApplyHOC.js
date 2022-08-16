import React from 'react'

export default function partiallyApplyHOC(Component, partialProps) {
  return props => {
    return <Component {...partialProps} {...props} />
  }
}

export const Button = ({size, color, text, ...props}) => {
    return (
        <button {...props} style={{padding: size === 'large' ? '32px' : '8px', fontSize: size === 'large' ? '32px' : '16px', backgroundColor: color}}>
            {text}
        </button>
    )
}

export const DangerButton = partiallyApplyHOC(Button, {color: 'red'});
export const BigSuccessButton = partiallyApplyHOC(Button, {size: 'large', color: 'green'});
