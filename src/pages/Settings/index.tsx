import React from 'react';
import { usersSelector } from '../../store/userSlice';
import { useSelector } from 'react-redux'

export default function Settings() {
  const { user, loading, hasErrors } = useSelector(usersSelector);

    return (
        <div>Settings</div>
    )
}
