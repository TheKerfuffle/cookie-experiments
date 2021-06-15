import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';




function ObjectCookie(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let [localCookies, setLocalCookies] = useState(cookies);

    let [inputthing, setinputthing] = useState('');


    useEffect(() => {
        if (cookies.patientName === undefined) {
            setCookie('patientName', '', { path: '/' });
        }
        if (cookies.patientLastName === undefined) {
            setCookie('patientLastName', '', { path: '/' });
        }
        

    }, [cookies])


    //___________________________________________#nAthAn___________________________________________
    // This function can handle the submit for every single input field this project will have 
    // They must be passed in as an object and are then extracted as a key value pair.
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.value);

        setLocalCookies({...localCookies, [newCookie.key]: newCookie.thing});

        setCookie(newCookie.key, newCookie.thing, { path: '/' });
    }







    function renderTHECookie() {
        return JSON.stringify(cookies);
    }

    function renderLocalCookie() {
        return JSON.stringify(localCookies);
    }

    return (
        <>
            <p>ObjectCookie So Far:</p>

            <p>{inputthing}</p>

            <p>Local Cookie Object: {renderLocalCookie()}</p>
            <p>THE Cookie Object: {renderTHECookie()}</p>

            {/* Input for the key part of a new cookie object */}
            {/* <input
                placeholder="Enter new cookie key"
                type="text"
                value={cookieKey}
                onChange={(e) => setCookieKey(e.target.value)}>
            </input> */}
            {/* Input for the value part of a new cookie object */}
            {/* <input
                placeholder="Enter new cookie value"
                type="text"
                value={name}
                onChange={(e) => setinputthing(e.target.value)}>
            </input>
            <button onClick={() => submitCookie(cookieKey, name)}>
                Butthole
            </button> */}
            <p>Patient First Name:</p>
            <input
                placeholder="Enter THE cookie value"
                type="text"
                value={localCookies.patientName}
                onChange={(e) => submitCookie({key: 'patientName', thing: e.target.value})}>
            </input>

            {/* <input
                placeholder="Enter local cookie value"
                type="text"
                value={localCookies.patientName}
                onChange={(e) => setLocalCookies({...localCookies, patientName: e.target.value})}>
            </input> */}

            <p>Patient Last Name:</p>
            <input
                placeholder="Enter THE cookie value"
                type="text"
                value={localCookies.patientLastName}
                onChange={(e) => submitCookie({key: 'patientLastName', thing: e.target.value})}>
            </input>

            {/* <button onClick={() => submitCookie("patientName", cookies.patientName)}>
                Change Patient Name 
            </button> */}


            <p>Remove Cookie:</p>
            <input
                placeholder="Enter new cookie value"
                type="text"
                value={inputthing}
                onChange={(e) => setinputthing(e.target.value)}>
            </input>
            <button onClick={() => removeCookie(inputthing)}>
                Remove Cookie
            </button>

        </>
    )
}

export default ObjectCookie;