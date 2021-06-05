import styled from "styled-components";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Select from "@kiwicom/orbit-components/lib/Select";
import Text from "@kiwicom/orbit-components/lib/Text";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;
const Step0 = ({ formik }) => {
  const { errors, handleChange, values } = formik;

  return (
    <Container>
      <InputField
        type="text"
        id="issuerName"
        name="issuerName"
        error={errors.issuerName}
        label="Issuer name"
        onChange={handleChange}
        value={values.issuerName}
      />

      <InputField
        type="text"
        id="vatNum"
        name="vatNum"
        error={errors.vatNum}
        label="VAT Number"
        onChange={handleChange}
        value={values.vatNum}
      />
      <Select
        options={[
          { label: "ES", value: "ES" },
          { label: "FI", value: "FI" },
          { label: "GB", value: "GB" },
        ]}
        placeholder="Select country"
        id="country"
        name="country"
        label="Country"
        onChange={handleChange}
        value={values.country}
      />
      <Text size="small">Note: All fields are compulsory</Text>
    </Container>
  );
};

export default Step0;
