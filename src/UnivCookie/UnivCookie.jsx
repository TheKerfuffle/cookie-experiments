import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function UnivCookie(props) {

    // const cookies = new Cookies();

    // useEffect(() => {
    //     cookies.set('myCat', 'Pacman', { path: '/' });
    // }, [])

    // let [name, setName] = useState('');

    // function submitCookie(newCookie) {
    //     cookies.set('name', newCookie, { path: '/' });
    // }


    return (
        <>
            <p>UnivCookie So Far:</p>

            {/* <p>{JSON.stringify(cookies)}</p>

            <p> Cookie Name: {cookies.cookies.name}</p>
            <p> Local Name: {name}</p>



            <input
                placeholder="Enter new name, linked with Cookie"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}>

            </input>
            <button onClick={() => submitCookie(name)}>
                Butthole
            </button> */}
        </>
    )
}

export default UnivCookie;