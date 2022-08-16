import React from 'react'

export default function printPropsHOC(Component) {
  return (props) => {
    console.log(props)
    return <Component {...props} />
  }
}
