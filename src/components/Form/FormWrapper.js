import styled from "styled-components";
import { colors } from "../../themeVariables";
import TermsAndConditions from "@kiwicom/orbit-components/lib/icons/TermsAndConditions";
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import Actions from "./Actions";
import { useFormik } from "formik";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Summary from "./Summary";
import {
  stepValidations,
  VALIDATION_SCHEMAS,
} from "../../utils/stepValidations";
import Button from "@kiwicom/orbit-components/lib/Button";
import Check from "@kiwicom/orbit-components/lib/icons/Check";
import Text from "@kiwicom/orbit-components/lib/Text";

const Container = styled.div`
  width: 550px;
  height: 550px;
  display: flex;
  flex-flow: column;

  @media only screen and (max-width: 600px) {
    width: 95%;
    height: 95%;
    margin: 10px;
  }
`;

const Header = styled.div`
  background-color: ${colors.primary.dark};
  height: 75px;
  display: flex;
  color: white;
  padding: 10px 40px;
  border-radius: 12px 12px 0 0;
  align-items: center;
  gap: 8px;

  @media only screen and (max-width: 600px) {
    padding: 10px 16px;
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 20px 40px;
  background-color: white;
  border-radius: 0 0 12px 12px;

  > form {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
  }

  &.finishStep {
    align-items: center;
    justify-content: center;
    gap: 32px;
    height: 100%;
    > h2 {
      margin-top: 0;
    }
  }
`;

const FormWrapper = () => {
  //State

  const [step, setStep] = useState(0);
  const [hasProcessFinished, setHasProcessFinished] = useState(false);
  const TOTAL_STEPS = 4;
  const MOCK_CALL =
    "https://run.mocky.io/v3/b49156c8-0dca-4537-9433-d6eaa3d1191e";

  // Formik Handlers

  const formik = useFormik({
    initialValues: {
      issuerName: "",
      invoiceNum: "",
      currency: "",
      amount: "",
      country: "",
      vatNum: "",
      issueDate: "",
      dueDate: "",
      file: "",
    },
    validationSchema: VALIDATION_SCHEMAS[step],
    onSubmit: (values, actions) => {
      const formData = new FormData();
      Object.keys(values).forEach((id) => {
        if (id !== "file") {
          formData.append(`${id}`, values[id]);
        }
      });

      fetch(MOCK_CALL, {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          if (res.status === 200) {
            actions.resetForm();
            setHasProcessFinished(true);
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },
  });

  const { handleSubmit, values, errors } = formik;

  //Helpers

  function handleKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  const STEP_RENDERS = {
    step0: <Step0 formik={formik} />,
    step1: <Step1 formik={formik} />,
    step2: <Step2 formik={formik} />,
    step3: <Summary formik={formik} />,
  };

  //Handlers

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleReset = () => {
    setStep(0);
    setHasProcessFinished(false);
  };

  return (
    <Container>
      <Header>
        <TermsAndConditions />
        <p>Add Invoice</p>
      </Header>
      {hasProcessFinished ? (
        <FormBody className="finishStep">
          <h2>
            <Check size="large" />
            Succesfully Sent
          </h2>
          <Button onClick={handleReset}>Add another invoice</Button>
        </FormBody>
      ) : (
        <FormBody>
          <StepIndicator currentStep={step} />

          <form
            encType="multipart/form-data"
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit}
          >
            {STEP_RENDERS[`step${step}`]}
          </form>
          <Text size="small">Note: all fields are compulsory</Text>
          <Actions
            nextAllowed={stepValidations(step, values, errors)}
            currentStep={step}
            totalSteps={TOTAL_STEPS}
            onClickNext={handleNextStep}
            onClickPrev={handlePrevStep}
            onSubmit={handleSubmit}
          ></Actions>
        </FormBody>
      )}
    </Container>
  );
};

export default FormWrapper;
