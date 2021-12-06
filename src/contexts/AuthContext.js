import React, { useContext,useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {authentication} from '../firebase'

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [loading,setloading] = useState(true);
    const [user,setuser] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        authentication.onAuthStateChanged((user) => {
            setuser(user);
            setloading(false);
            if(user) navigate('/chats');
        })  
    }, [user,navigate]);

    const value = {user}

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

