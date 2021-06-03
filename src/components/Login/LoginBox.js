import styled from "styled-components";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from "@kiwicom/orbit-components/lib/Button";
import UserIcon from "./userIcon";
import { colors } from "../../themeVariables";
import { useState } from "react";

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

// TODO:
// Control de errores del login?

const LoginBox = ({ onSendData = () => {} }) => {
  const [userData, setUserData] = useState({ email: null, password: null });

  //Handlers

  const handleSubmit = () => {
    return onSendData(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Container>
        <UserLogo>
          <UserIcon width={40} />
        </UserLogo>
        <h2>Member Login</h2>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <Button
          disabled={!userData.email || !userData.password}
          fullWidth
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Container>
    </>
  );
};

export default LoginBox;
