import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';




function ObjectCookie(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let [localCookies, setLocalCookies] = useState(cookies);
    let [checkBox, setCheckBox] = useState(true);

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
        if (cookies.patientIDNumber === undefined) {
            setCookie('patientIDNumber', '', { path: '/' });
        }
        if (cookies.eventSummary === undefined) {
            setCookie('eventSummary', '', { path: '/' });
        }
        if (cookies.eventDay === undefined) {
            setCookie('eventDay', '', { path: '/' });
        }
        if (cookies.patientBirthDay === undefined) {
            setCookie('patientBirthDay', '', { path: '/' });
        }
        if (cookies.patientBirthMonth === undefined) {
            setCookie('patientBirthMonth', '', { path: '/' });
        }
        if (cookies.patientBirthYear === undefined) {
            setCookie('patientBirthYear', '', { path: '/' });
        }
        if (cookies.woot === undefined) {
            setCookie('woot', false, { path: '/' });
        }
        // if (cookies.dopewoot === undefined) {
        //     setCookie('dopewoot', '', { path: '/' });
        // }


        console.log('Cookie:', cookies);
        console.log('Local Cookie object', localCookies);
    }, [cookies])

    //___________________________________________#nAthAn___________________________________________
    // This function can handle the submit for every single input field this project will have 
    // They must be passed in as an object and are then extracted as a key value pair.
    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.thing);

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
            <p>ObjectCookie So Far:</p>

            <p>Thing to Remove: {removeThing}</p>

            {/* Display Global cookie and Local cookie object  */}
            <p>Local Cookie Object: {renderLocalCookie()}</p>
            <p>THE Cookie Object: {renderTHECookie()}</p>


            <p>Patient First Name:</p>
            <input
                type="text"
                // change patientFirstName to the desired key for the key value pair
                placeholder="Enter Patient First Name"
                value={localCookies.patientFirstName}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'patientFirstName', thing: e.target.value })}>
            </input>

            <br />
            <br />

            <p>Patient Last Name:</p>
            <input
                type="text"
                // Change patientLastName to the desired key for the key value pair
                placeholder="Enter Patient Last Name"
                value={localCookies.patientLastName}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'patientLastName', thing: e.target.value })}>
            </input>

            <br />
            <br />

            <p>Patient ID Number:</p>
            <input
                type="number"
                // Change patientIDNumber to the desired key for the key value pair
                placeholder="Enter Patient Last Name"
                value={localCookies.patientIDNumber}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'patientIDNumber', thing: e.target.value })}>
            </input>

            <br />
            <br />

            <p>Patient Birthday:</p>
            <input
                type="text"
                // Change patientLastName to the desired key for the key value pair
                placeholder="Day"
                value={localCookies.patientBirthDay}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'patientBirthDay', thing: e.target.value })}>
            </input>
            <input
                type="text"
                // Change patientLastName to the desired key for the key value pair
                placeholder="Month"
                value={localCookies.patientBirthMonth}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'patientBirthMonth', thing: e.target.value })}>
            </input>
            <input
                type="text"
                // Change patientLastName to the desired key for the key value pair
                placeholder="Year"
                value={localCookies.patientBirthYear}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'patientBirthYear', thing: e.target.value })}>
            </input>

            <br />
            <br />

            <p>Patient Binary Information: (Checkboxes, under construction)</p>
            {/* let [checkBox, setCheckBox] = useState(false); */}

            <input
                type="checkbox" id="test" name="test" value={checkBox}
                onChange={() => setCheckBox(!checkBox)}
                checked={checkBox}></input>
            <label for="test">Local Checked?</label>

            <br />

            {<p>Local Checked value: {`${checkBox}`}</p>}

            <br />
            <br />


            <input
                type="checkbox" id="woot" name="biInfo" value={localCookies.woot}
                onClick={() => submitCookie({ key: 'woot', thing: !localCookies.woot })}
                checked={localCookies.woot}></input>
            <label for="woot">Do we w00t?</label>

            <br />

            {<p>Cookie Checked value: {`${localCookies.woot}`}</p>}

            <br />

            {/* <input
                type="checkbox" id="dopewoot" name="biInfo" value={true}
                onChange={(e) => submitCookie({ key: 'dopewoot', thing: e.target.value })}
            ></input>
            <label for="dopewoot">Do we #d0pEw00t?</label> */}

            <br />
            <br />

            <p>Event day:</p>
            <input
                type="date"
                // Change patientIDNumber to the desired key for the key value pair
                placeholder="Date of Birth"
                value={localCookies.eventDay}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'eventDay', thing: e.target.value })}>
            </input>

            <br />
            <br />

            <p>Patient Blood Type:</p>
            <select
                name="Blood Type"
                // Change bloodType to the variable you are capturing!!!
                value={localCookies.bloodType}
                onChange={(e) => submitCookie({ key: 'bloodType', thing: e.target.value })}
            >
                {/* Edit options as needed! 
                The value attribute is what is
                taken in by the submit function */}
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

            <br />
            <br />

            <p>Summary of Events:</p>

            <textarea
                // Change patientIDNumber to the desired key for the key value pair
                placeholder="Enter Summary of Events"
                value={localCookies.eventSummary}
                // submitCookie takes in a SINGLE OBJECT
                onChange={(e) => submitCookie({ key: 'eventSummary', thing: e.target.value })}>
            </textarea>

            <br />
            <br />


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