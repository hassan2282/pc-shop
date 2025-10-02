import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to="/store/login" state={{from: location}} replace />
    }

    return children;
}

export default PrivateRoute;