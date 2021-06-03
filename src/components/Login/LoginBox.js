import styled from "styled-components";
import Button from "@kiwicom/orbit-components/lib/Button";
import UserIcon from "./userIcon";
import { colors } from "../../themeVariables";

const Container = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 300px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  margin: 15px;

  > Button {
    margin-top: 16px;
  }
`;

const UserLogo = styled.div`
  border-radius: 50%;
  width: 75px;
  height: 75px;
  color: white;
  background-color: ${colors.primary.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    fill: white;
  }
`;

const LoginBox = ({ onClick = () => {} }) => {
  return (
    <>
      <Container>
        <UserLogo>
          <UserIcon width={40} />
        </UserLogo>
        <h2>Member Login</h2>
        <Button fullWidth onClick={onClick}>
          Press to Login
        </Button>
      </Container>
    </>
  );
};

export default LoginBox;
