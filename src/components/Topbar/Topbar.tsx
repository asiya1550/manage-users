import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css';
import { useSelector } from "react-redux";
import { usersSelector } from "../../store/userSlice";

export default function Topbar() {
    const { user } = useSelector(usersSelector);
    // const handleLogout = () => {
    //     dispatch({ type: actionTypes.LOGOUT })
    // }
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/' className='link'>
                            HOME
                        </Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/employees' className='link'>
                            EMPLOYEES
                        </Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/add-user' className='link'>
                            ADD-USER
                        </Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/write-post' className='link'>
                            WRITE
                        </Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/login' className='link'>
                            {user ? 'LOGOUT' : null}
                        </Link>
                    </li>
                </ul>

            </div>
            <div className='topRight'>
                {
                    user ?
                        (
                            <Link to='settings'>
                                <img
                                    className='topImage'
                                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU"} />
                            </Link>
                        )
                        :
                        (
                            <ul className='topList'>
                                <li className='topListItem'>
                                    <Link to='/login' className='link'>
                                        LOGIN
                                    </Link>
                                </li>
                                <li className='topListItem'>
                                    <Link to='/register' className='link'>
                                        REGISTER
                                    </Link>
                                </li>
                            </ul>

                        )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
