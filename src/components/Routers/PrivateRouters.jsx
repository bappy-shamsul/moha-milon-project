import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouters = ( {children} ) => {
    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRouters;

PrivateRouters.propTypes = {
    children : PropTypes.node
}