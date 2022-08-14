import React from 'react'

function RegularList({items, resourceName, itemComponent: ItemComponent}) {
  return (
    <>
        {items.map((item, i) => (
            <ItemComponent key={i} {...{[resourceName]: item}} />
            // <ItemComponent key={i} person={item} />

        ))}
    </>
  )
}

export default RegularList