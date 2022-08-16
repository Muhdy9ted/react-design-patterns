import React from 'react'
import withEditableUserHOC from './withEditableUserHOC'
import withEditableResourceHOC from './withEditableResourceHOC'


const UserInfoForm = withEditableResourceHOC(({user, onChangeUser, onSaveUser, onResetUser})=>{
    const {name, age, hairColor} = user || {};
    return user ? (
        <>
            <label>
                Name:
                <input type="text" value={name} onChange={(e)=>onChangeUser({name: e.target.value})} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={(e)=>onChangeUser({age: Number(e.target.value)})} />
            </label>
            <label>
                Name:
                <input type="text" value={hairColor} onChange={(e)=>onChangeUser({hairColor: e.target.value})} />
            </label>
            <button onClick={onSaveUser}>Save</button>
            <button onClick={onResetUser}>Reset</button>
        </>
    ) : <p>Loading...</p>
}, '/users/124', 'user');

// const UserInfoForm = withEditableUserHOC(({user, onChangeUser, onSaveUser, onResetUser})=>{
//     const {name, age, hairColor} = user || {};
//     return user ? (
//         <>
//             <label>
//                 Name:
//                 <input type="text" value={name} onChange={(e)=>onChangeUser({name: e.target.value})} />
//             </label>
//             <label>
//                 Age:
//                 <input type="number" value={age} onChange={(e)=>onChangeUser({age: Number(e.target.value)})} />
//             </label>
//             <label>
//                 Name:
//                 <input type="text" value={hairColor} onChange={(e)=>onChangeUser({hairColor: e.target.value})} />
//             </label>
//             <button onClick={onSaveUser}>Save</button>
//             <button onClick={onResetUser}>Reset</button>
//         </>
//     ) : <p>Loading...</p>
// }, '124')

export default UserInfoForm;