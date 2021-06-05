import styled from "styled-components";
import { colors } from "../../themeVariables";

const StyledBullet = styled.i`
  margin-right: 8px;
  display: block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${colors.secondary.main};
  &.active {
    background-color: ${colors.primary.dark};
  }

  &.final {
    background-color: ${colors.primary.light};
  }
`;

const StyledBulletContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const StepIndicator = ({ currentStep }) => {
  return (
    <StyledBulletContainer>
      <StyledBullet className={currentStep === 0 && "active"} />
      <StyledBullet className={currentStep === 1 && "active"} />
      <StyledBullet className={currentStep === 2 && "active"} />
      <StyledBullet className={currentStep === 3 && "final"} />
    </StyledBulletContainer>
  );
};

export default StepIndicator;
