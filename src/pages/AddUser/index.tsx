import React from 'react';
import { useState, useRef } from "react";
import { signUp } from "../../services/loginService";
import './index.css'


const AddUsers = () => {

    let emailRef = useRef<HTMLInputElement>(null);
    let passwordRef = useRef<HTMLInputElement>(null)
    let roleRef = useRef<HTMLSelectElement>(null)
    let formRef = useRef<HTMLFormElement>(null)

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const successCB = (formRef: React.RefObject<HTMLFormElement>) => {
        setSuccess('user is succesfully added');
        formRef.current?.reset();
    }

    const submitUser = async (e: React.FormEvent<HTMLFormElement>) => {
        setError('')
        setSuccess('')
        e.preventDefault();

        let email = emailRef.current?.value;
        let password = passwordRef.current?.value;
        let role = roleRef.current?.value;

        if (email && password && role) {
            const res: { error: string } | boolean = await signUp(email, password, role);
            (typeof res === 'object' && !!res.error) ? setError(res.error) : successCB(formRef)
        }
    }

    return (
        <div className='addUserPg'>
            <div className='addUserWrap'>
                <h2>Sign Up</h2>
                <div>
                    <form onSubmit={submitUser} ref={formRef}>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            ref={emailRef}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            ref={passwordRef}

                        />
                        <select
                            name="role"
                            ref={roleRef}
                            required={true}
                        >
                            <option value="">Select Role</option>
                            <option value="HR">HR</option>
                            <option value="Standard">Standard</option>
                            <option value="Admin">Admin</option>
                        </select>

                        {error && <div className='error'>{error}</div>}
                        {success && <div className='success'>{success}</div>}

                        <button type="submit" > Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddUsers;

