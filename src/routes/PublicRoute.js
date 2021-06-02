import { Route } from "react-router-dom";
import NavbarLogo from "../components/Global/NavbarLogo";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <NavbarLogo>
          <Component {...props} />
        </NavbarLogo>
      )}
    />
  );
};

export default AuthRoute;
