// This component ensures that the user's data is fetched and the global context for that data is updated anytime the auth is changed (user logs in/out, user refreshes the page/navigates away, etc)

import { useEffect } from 'react';
import { useUser } from './UserProvider';
import { auth } from '../../firebaseConfig';

const AuthStateListener = () => {
  const { setUser, setLoading } = useUser();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userEmail = user.email;

        const response = await fetch(`/api/getUserData`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail }),
        });
        const userData = await response.json();

        if (response.ok) {
          setUser(userData);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return null; 
};

export default AuthStateListener;