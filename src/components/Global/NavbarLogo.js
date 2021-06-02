import styled from "styled-components";
import { colors } from "../../themeVariables";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const NavBarContainer = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 4px 12px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary.light};
  box-shadow: 1px 10px black;
`;

const StyledTitle = styled.h3`
  color: white;
  font-size: 16px;
  min-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChildrenWrapper = styled.div`
  height: calc(100% - 48px);
  width: 100%;
`;

const NavbarLogo = ({ children, onClick = () => {} }) => {
  return (
    <Container>
      <NavBarContainer>
        <StyledTitle>Arex Invoice Recorder</StyledTitle>
      </NavBarContainer>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

export default NavbarLogo;
