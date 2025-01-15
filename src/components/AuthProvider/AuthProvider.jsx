import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext(null)

const AuthProvider = ( {children}) => {
    const authInfo = {name: 'Kalam Alam Balam'}
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