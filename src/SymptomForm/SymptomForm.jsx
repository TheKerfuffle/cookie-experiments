import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';

function SymptomForm({ symptomComponentNum, localCookies, setLocalCookies }) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    useEffect(() => {
        if (cookies[`symptom${symptomComponentNum}`] === undefined) {
            cookies[`symptom${symptomComponentNum}`] = '';
        }
    }, [])


    function submitCookie(newCookie) {
        console.log('setting THE cookie', newCookie.key, newCookie.thing);

        setLocalCookies({ ...localCookies, [newCookie.key]: newCookie.thing });

        setCookie(newCookie.key, newCookie.thing, { path: '/' });
    }

    function addSymptom() {

        setCookie(
            'symptomComponents',
            [...localCookies.symptomComponents, symptomComponentNum + 1],
            { path: '/' }
        );
        setCookie(
            `symptom${symptomComponentNum + 1}`,
            '',
            { path: '/' }
        );

        setLocalCookies(
            {
                ...localCookies,
                ['symptomComponents']: [...localCookies.symptomComponents, symptomComponentNum + 1]
            }
        )
        setLocalCookies(
            {
                ...localCookies,
                [`symptom${symptomComponentNum + 1}`]: ''
            }
        )

    }

    return (
        <>

            {
                localCookies.symptomComponents.length === symptomComponentNum ?
                <>
                <p>Describe Symptom {symptomComponentNum}:</p>
                <input
                    type="text"
                    // change patientFirstName to the desired key for the key value pair
                    placeholder="Enter symptom"
                    value={localCookies[`symptom${symptomComponentNum}`]}
                    // submitCookie takes in a SINGLE OBJECT
                    onChange={(e) => submitCookie({ key: `symptom${symptomComponentNum}`, thing: e.target.value })}>
                </input>
                </>
                    :
                    <p>{localCookies[`symptom${symptomComponentNum}`]}</p>
            }

            

            <br />
            <br />
            {
                localCookies.symptomComponents.length === symptomComponentNum ?

                    <button onClick={addSymptom}>
                        Add New Symptom
                    </button>
                    :
                    ''
            }
        </>
    )

}

export default SymptomForm;