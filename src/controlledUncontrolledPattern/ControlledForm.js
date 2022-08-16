import React, {useState, useEffect} from 'react'

export default function ControlledForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    const [nameInputError, setNameInputError] = useState('');

    useEffect(() => {
        if(name.length < 2){
            setNameInputError('name too short');
        }else{
            setNameInputError('')
        }
    }, [name, age, hairColor]);

  return (
    <form>
        {nameInputError && <p>{nameInputError}</p>}
        <input type="text" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
        <input type="number" name="age" placeholder='Age' value={age} onChange={e => setAge(Number(e.target.value))}/>
        <input type="text" name="hairColor" placeholder='Hair Color' value={hairColor} onChange={e => setHairColor(e.target.value)}/>
        <button>Submit</button>
    </form>
  )
}
