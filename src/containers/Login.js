import styled from "styled-components";
import LoginBox from "../components/Login/LoginBox";
import { colors } from "../themeVariables";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${`linear-gradient(156deg, ${colors.primary.dark} 0%,  ${colors.primary.light} 100%)`};
`;

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLoginSubmit = () => {
    loginWithRedirect();
  };

  return (
    <Container>
      <LoginBox onClick={handleLoginSubmit} />
    </Container>
  );
};

export default Login;
