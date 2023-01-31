import React, { useState } from 'react';
import { app } from '../../services/firebaseConf'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './index.css';

const Login = () => {

  const [loading, setLoading] = useState(false);

  const handleSignInWithGoogle = async () => {

    setLoading(true);
    try {
      const auth = getAuth(app);
      const provider = await new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      //Todo authenticate from users collection
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

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
      </div>
    </div>
  );
};

export default Login;

