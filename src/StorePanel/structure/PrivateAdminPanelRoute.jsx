import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateAdminPanelRoute = ({ children, adminRole }) => {
  const location = useLocation();
  const adminApprove = useSelector(state => state.adminApprove);
  if (!adminRole) {
    console.log(adminRole)
    return <Navigate to="/admin/admGate" state={{from: location}} replace />
  }
  
  if (adminRole && adminRole === 1) {
    return <Navigate to="/admin/admGate" state={{from: location}} replace />
  }
  if (adminRole > 1) {
    return <Navigate to="/admin/admGate" state={{from: location}} replace />
  }
  
  return children;
  
};

export default PrivateAdminPanelRoute;