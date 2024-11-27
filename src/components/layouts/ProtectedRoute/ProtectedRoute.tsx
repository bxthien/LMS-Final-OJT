import { getStorageData } from "../../../config/storage";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../constants/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const dispatch = useDispatch();

  const accessToken = getStorageData(ACCESS_TOKEN);
  const refreshToken = getStorageData(REFRESH_TOKEN);
  if (!accessToken && !refreshToken) {
    dispatch(logout());
  }

  // if (!isAuth) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
};

export default ProtectedRoute;
