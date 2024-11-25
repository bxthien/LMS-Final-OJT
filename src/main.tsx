import { StrictMode, Suspense } from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SpinLoading } from "./components/SpinLoading/SpinLoading";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<SpinLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);
