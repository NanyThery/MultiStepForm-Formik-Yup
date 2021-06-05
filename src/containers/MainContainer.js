import styled from "styled-components";

import FormWrapper from "../components/Form/FormWrapper";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = () => {
  return (
    <Container>
      <FormWrapper />
    </Container>
  );
};

export default MainContainer;
