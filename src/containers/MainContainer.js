import styled from "styled-components";
import { colors } from "../themeVariables";
import Form from "../components/Form/Form";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: ${colors.background};
`;

const MainContainer = () => {
  return (
    <Container>
      <Form></Form>
    </Container>
  );
};

export default MainContainer;
