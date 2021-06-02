import { Redirect, Route } from "react-router-dom";
import PATHS from "./paths";
import Layout from "../components/Layout";

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to={PATHS.base} />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

export default AuthRoute;
