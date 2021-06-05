import styled from "styled-components";
import InputField from "@kiwicom/orbit-components/lib/InputField";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;
const Step1 = ({ formik }) => {
  const { handleChange, values, errors } = formik;

  return (
    <Container>
      <InputField
        type="text"
        id="invoiceNum"
        error={errors.invoiceNum}
        name="invoiceNum"
        label="Invoice number"
        value={values.invoiceNum}
        onChange={handleChange}
      ></InputField>

      <InputField
        id="issueDate"
        label="Issue date"
        type="date"
        placeholder="DD-MM-YYYY"
        onChange={handleChange}
        value={values.issueDate}
        error={errors.issueDate}
      />

      <InputField
        id="dueDate"
        label="Due date"
        type="date"
        placeholder="DD-MM-YYYY"
        onChange={handleChange}
        value={values.dueDate}
        error={errors.dueDate}
      />
    </Container>
  );
};

export default Step1;
