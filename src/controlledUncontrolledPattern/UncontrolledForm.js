import React from 'react'

export default function UncontrolledForm() {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const hanldeSubmit = (e)=>{
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }

  return (
    <form onSubmit={hanldeSubmit}>
        <input type="text" name="name" placeholder='Name' ref={nameInput}/>
        <input type="number" name="age" placeholder='Age' ref={ageInput}/>
        <input type="text" name="hairColor" placeholder='Hair Color' ref={hairColorInput}/>
        <input type="submit" value="Submit"/>
    </form>
  )
}
