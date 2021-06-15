import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';




function RCookie(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let [name, setName] = useState('');
    let [cookieKey, setCookieKey] = useState('');

    useEffect(() => {
        setName(cookies.Butthole)
    }, [cookies])

    function submitCookie(key, value) {
        console.log('clicked', key, value);

        setCookie(key, value, { path: '/' });
    }

    function renderCookie() {
        return JSON.stringify(cookies);
    }

    return (
        <>
            <p>RCookie So Far:</p>

            <p>local name: {name}</p>
            <p>Cookie name: {cookies.name}</p>

            <p>Cookie Object: {renderCookie()}</p>

            {/* Input for the key part of a new cookie object */}
            <input
                placeholder="Enter new cookie key"
                type="text"
                value={cookieKey}
                onChange={(e) => setCookieKey(e.target.value)}>
            </input>
            {/* Input for the value part of a new cookie object */}
            <input
                placeholder="Enter new cookie value"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}>
            </input>
            <button onClick={() => submitCookie(cookieKey, name)}>
                Butthole
            </button>

        </>
    )
}

export default RCookie;