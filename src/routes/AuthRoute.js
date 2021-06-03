import { Redirect, Route } from "react-router-dom";
import PATHS from "./paths";
import Layout from "../components/Layout";

const AuthRoute = ({
  component: Component,
  isAuthenticated,
  onLogOut,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to={PATHS.login} />
        ) : (
          <Layout onLogOut={onLogOut}>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

export default AuthRoute;
