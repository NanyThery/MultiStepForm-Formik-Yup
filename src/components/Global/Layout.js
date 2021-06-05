import styled from "styled-components";
import Logout from "@kiwicom/orbit-components/lib/icons/Logout";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import { colors } from "../../themeVariables";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const NavBarContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 0 0 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d6dc;
`;

const StyledTitle = styled.p`
  color: #d2d6dc;
  font-size: 16px;
  min-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChildrenWrapper = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  background-color: ${colors.background};
`;

const Layout = ({ children, onLogOut = () => {}, isAuthenticated }) => {
  return (
    <Container>
      <NavBarContainer>
        <StyledTitle>Invoice Recorder</StyledTitle>
        {isAuthenticated && (
          <ButtonLink onClick={onLogOut}>
            Log out <Logout />
          </ButtonLink>
        )}
      </NavBarContainer>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

export default Layout;
