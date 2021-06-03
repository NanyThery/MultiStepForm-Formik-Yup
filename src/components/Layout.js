import styled from "styled-components";
import { colors } from "../themeVariables";

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
  background-color: ${colors.primary.dark};
`;

const Input = styled.input`
  background-color: transparent;
  color: white;
  border-radius: 8px;
  height: 80%;
  border: 1px solid ${colors.secondary.main};
  padding: 5px 8px;
  cursor: pointer;
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
  padding: 8px 16px;
  height: calc(100%-48px);
  width: 100%;
  box-sizing: border-box;
`;

const Layout = ({ children, onLogOut = () => {} }) => {
  return (
    <Container>
      <NavBarContainer>
        <StyledTitle>Arex Invoice Recorder</StyledTitle>
        <Input type="button" value="Log Out" onClick={onLogOut} />
      </NavBarContainer>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

export default Layout;
