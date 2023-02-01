import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { editUser, getUser } from '../../store/actions'

export default function Edit_User() {

    let formRef = useRef<HTMLFormElement>(null);

    let [email, setEmail] = useState('');
    let [role, setRole] = useState('');
    let [id, setId] = useState('');


    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        let [, , , id] = location.pathname.split('/');
        const fetchUser = async () => {
            let data: any = await getUser(id);
            data && setEmail(data.email);
            data && setRole(data.role)
            data && setId(data.id);

        }
        fetchUser();

    }, [])

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const submitUser = async (e: React.FormEvent<HTMLFormElement>) => {
        setError('')
        setSuccess('')
        e.preventDefault();
        await editUser(id, { email, role })
        navigate('/employees')
    }

    return (
        <div className='addUserPg'>
            <div className='addUserWrap'>
                <h2>Edit User</h2>
                <div>
                    <form onSubmit={submitUser} ref={formRef}>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <select
                            name="role"
                            value={role}
                            required={true}
                            onChange={(e) => setRole(e.target.value)}

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
}
