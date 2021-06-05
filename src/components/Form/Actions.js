import styled from "styled-components";
import Button from "@kiwicom/orbit-components/lib/Button";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Actions = ({
  currentStep,
  nextAllowed,
  totalSteps,
  onClickNext = () => {},
  onClickPrev = () => {},
  onSubmit = () => {},
}) => {
  return (
    <Container>
      <Button
        width={"100px"}
        disabled={currentStep === 0}
        onClick={onClickPrev}
      >
        Previous
      </Button>

      {currentStep === totalSteps - 1 ? (
        <Button disabled={!nextAllowed} width={"100px"} onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <Button disabled={!nextAllowed} width={"100px"} onClick={onClickNext}>
          Next
        </Button>
      )}
    </Container>
  );
};

export default Actions;
