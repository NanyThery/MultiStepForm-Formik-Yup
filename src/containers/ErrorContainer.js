import styled from "styled-components";
import Button from "@kiwicom/orbit-components/lib/Button";
import PATHS from "../routes/paths";
import { colors } from "../themeVariables";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${`linear-gradient(156deg, ${colors.primary.dark} 0%,  ${colors.primary.light} 100%)`};
`;

const MessageContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 400px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  margin: 15px;

  > Button {
    margin-top: 16px;
  }
`;

const ErrorContainer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(PATHS.login);
  };
  return (
    <Container>
      {" "}
      <MessageContainer>
        <h1>This page doesn't exist</h1>
        <Button onClick={handleClick}>Go back home</Button>
      </MessageContainer>{" "}
    </Container>
  );
};

export default ErrorContainer;
