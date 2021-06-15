import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';




function ObjectCookie(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let [localCookies, setLocalCookies] = useState(cookies);

    let [removeThing, setRemoveThing] = useState('');


    useEffect(() => {
        if (cookies.patientFirstName === undefined) {
            setCookie('patientFirstName', '', { path: '/' });
        }
        if (cookies.patientLastName === undefined) {
            setCookie('patientLastName', '', { path: '/' });
        }
        if (cookies.bloodType === undefined) {
            setCookie('bloodType', '', { path: '/' });
        }



    }, [cookies])


    //___________________________________________#nAthAn___________________________________________
    // This function can handle the submit for every single input field this project will have 
    // They must be passed in as an object and are then extracted as a key value pair.
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.value);

        setLocalCookies({ ...localCookies, [newCookie.key]: newCookie.thing });

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
            {/* Display Global cookie and Local cookie object  */}
            <p>ObjectCookie So Far:</p>

            <p>Thing to Remove: {removeThing}</p>

            <p>Local Cookie Object: {renderLocalCookie()}</p>
            <p>THE Cookie Object: {renderTHECookie()}</p>

            <p>Patient First Name:</p>
            <input
                placeholder="Enter THE cookie value"
                type="text"
                value={localCookies.patientFirstName}
                onChange={(e) => submitCookie({ key: 'patientFirstName', thing: e.target.value })}>
            </input>

            <p>Patient Last Name:</p>
            <input
                placeholder="Enter THE cookie value"
                type="text"
                value={localCookies.patientLastName}
                onChange={(e) => submitCookie({ key: 'patientLastName', thing: e.target.value })}>
            </input>

            <p>Patient Blood Type:</p>
            <select
                name="Blood Type"
                value={localCookies.bloodType}
                onChange={(e) => submitCookie({ key: 'bloodType', thing: e.target.value })}
            >
                <option value="">--- Select Blood Type --- </option>
                <option value="O+">O Positive</option>
                <option value="O-">O Negative</option>
                <option value="A+">A Positive</option>
                <option value="A-">A Negative</option>
                <option value="B+">B Positive</option>
                <option value="B-">B Negative</option>
                <option value="AB+">AB Positive</option>
                <option value="AB-">AB Negative</option>
            </select>


            <p>Remove Cookie:</p>
            <input
                placeholder="Enter new cookie value"
                type="text"
                value={removeThing}
                onChange={(e) => setRemoveThing(e.target.value)}>
            </input>
            <button onClick={() => removeCookie(removeThing)}>
                Remove Cookie
            </button>

        </>
    )
}

export default ObjectCookie;