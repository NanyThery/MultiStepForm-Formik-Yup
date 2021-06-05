import styled from "styled-components";
import Select from "@kiwicom/orbit-components/lib/Select";
import FormattedInput from "./FormattedInput";
import InputFile from "@kiwicom/orbit-components/lib/InputFile";
import { ErrorMessage } from "formik";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
const Step1 = ({ formik }) => {
  const { handleChange, values, errors } = formik;

  const handleFileUpload = (e) => {
    formik.setFieldValue("file", e.currentTarget.files[0]);
  };

  const handleRemoveFile = (e) => {
    formik.setFieldValue("file", "");
  };

  const handleCustomValueChange = (value) => {
    formik.setFieldValue("amount", value);
  };

  return (
    <Container>
      <Select
        options={[
          { label: "EUR", value: "EUR" },
          { label: "GPB", value: "GPB" },
        ]}
        id="currency"
        name="currency"
        label="Currency"
        placeholder="Select currency"
        onChange={handleChange}
        value={values.currency}
      />
      <FormattedInput
        label={"Amount"}
        onChangeFormValue={handleCustomValueChange}
      />

      <InputFile
        allowedFileTypes=".pdf"
        type={"file"}
        label="Upload Invoice PDF"
        fileName={values.file.name ? values.file.name : ""}
        onRemoveFile={handleRemoveFile}
        error={errors.file}
        onChange={handleFileUpload}
        value={values.file}
      ></InputFile>
    </Container>
  );
};

export default Step1;
