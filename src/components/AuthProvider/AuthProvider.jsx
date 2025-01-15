import { createContext, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../FireBase/FireBase.config";

export const AuthContext = createContext(null)

const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 


    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
   const authInfo = { createUser, signInUser, user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}