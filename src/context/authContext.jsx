// Librerias
import { createContext, useState, useEffect } from 'react';

// Otros
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [session, setSession] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const getSessionSaved = async () => {
    setSession({ loading: false, error: null, data: null });

    try {
      const token = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user');
      //console.log('get loggin data', token, user);
      if (token !== null || user !== null ) {
        setSession({ loading: false, data: { token, user: JSON.parse(user) } });
      } else {
        setSession({ loading: false, error: null, data: null });
      }
    } catch (error) {
      console.log(error);
      setSession({ loading: false, error });
    }
  };

  useEffect(() => {
    getSessionSaved();
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
}
