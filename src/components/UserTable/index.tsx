import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../../store/actions'
import { Link } from 'react-router-dom';

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<{ [x: string]: any; }[] | undefined | undefined>([])
    const [deleteSucess, setDelSuccess] = useState('')
    const [showEditUser, setShowEditUser] = useState(false);

    useEffect(() => {
        const fetchUserfunc = async () => {
            let users = await fetchUsers();
            setUsers(users)
        }
        fetchUserfunc();
    }, [deleteSucess]);


    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        e.preventDefault();
        setDelSuccess('')
        await deleteUser(id);
        setDelSuccess('Record deleted successfully')
    }

    return (

        <div>
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user) => (
                            <tr key={user.uid}>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to={`user/${user.id}`} state={{ pre_user: user }} className='link'>
                                    <button className="edit-button" onClick={() => setShowEditUser(!showEditUser)}>Edit</button>
                                    </Link>

                                    <button className="delete-button" onClick={(e) => handleDelete(e, user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {
                    deleteSucess && <div className='success'>{deleteSucess}</div>
                }
            </div>
        </div>
    );
};

export default UserTable;
