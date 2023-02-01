import React from 'react';
import { app } from '../../services/firebaseConf'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './index.css';
import { usersSelector } from '../../store/userSlice';
import { stateUser } from '../../store/actions'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/index';

const Login = () => {
  const dispatch = useAppDispatch();
  const { user, loading, hasErrors } = useSelector(usersSelector);

  const handleSignInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = await new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const userData = result['user'];
    userData.email && dispatch(stateUser(userData.email));
  };

  if (hasErrors) return <p>Unable to get User</p>;
  return (
    <div className='login-page'>
      <div className="" onClick={handleSignInWithGoogle}>
        {
          loading
            ?
            'Loading...'
            :
            <>
              <button className='loginBtn'>
                <i className="fab fa-google"></i>
                . Sign in with Google
              </button>
            </>
        }
        {
          user.email && <div className='success'>{user.email}</div>}
      </div>
    </div>
  );
};

export default Login;

