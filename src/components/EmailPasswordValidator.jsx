import React, { useState } from 'react'
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
function EmailPasswordValidator() {
    const [error, setError] = useState(false)
    const[emailerror,setEmailerror] = useState('')

    const validateEmail = (value) => {
        if (validator.isEmail(value, { allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, allow_underscores: false, domain_specific_validation: false, blacklisted_chars: '', host_blacklist: [] })) {
            setEmailerror('Is valid Email')
        } else {
            setEmailerror('Is not valid Email')
        }

    }
    const validatePassword = (value) => {
        if (validator.isStrongPassword(value, [{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }])) {
            setError(true)
        } else {
            setError(false)
        }

    }
    return (
        <>
            <div className="emailPassword center-box">
                <h1>Checking Password Strength  in React Js </h1>
                <div className="">

                    <div className="email">
                        <label htmlFor="email">Enter Email</label>
                        <input type="text"
                            id='email'
                            onChange={(e) => validateEmail(e.target.value)} />
                            {emailerror=== '' ? ('') : (<span style={{
                            fontWeight: 'bold',
                            color: 'red'

                        }}>{emailerror}</span>)

                        }
                    </div>
                    <div className="password">
                        <label htmlFor="pswrd">Enter valid Password</label>
                        <input type="text"
                            id='password'
                            onChange={(e) => validatePassword(e.target.value)}
                        />
                        {/* {error !== ' ' && error === true ? (<span style={{
                            fontWeight: 'bold',
                            color: 'green'}}) : (<span style={{
                            fontWeight: 'bold',
                            color: 'red'

                        }}>{error}</span>) */}

                        {/* } */}
                    
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmailPasswordValidator
