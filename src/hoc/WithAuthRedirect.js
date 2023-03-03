import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component, navigateTo) => {
  const ProtectedComponent = (props) => {
    const isAuth = useSelector((state) => state.auth.auth);

    return isAuth !== null ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
};
