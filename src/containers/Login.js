import styled from "styled-components";
import LoginBox from "../components/Login/LoginBox";
import { colors } from "../themeVariables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${`linear-gradient(156deg, ${colors.primary.dark} 0%,  ${colors.primary.light} 100%)`};
`;

const Login = () => {
  const handleLoginSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <LoginBox onSendData={handleLoginSubmit} />
    </Container>
  );
};

export default Login;
