import axios from "axios";
import { FC, Suspense, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { SpinLoading } from "../../SpinLoading/SpinLoading";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AppLayout from "../page";

const PrivateLayout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (error?.response?.status) {
          case 403:
            navigate("/403");
            break;
          default:
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  return (
    <>
      <Suspense fallback={<SpinLoading />}>
        <ProtectedRoute>
          <AppLayout>
            <Outlet />
          </AppLayout>
        </ProtectedRoute>
      </Suspense>
    </>
  );
};

export default PrivateLayout;
