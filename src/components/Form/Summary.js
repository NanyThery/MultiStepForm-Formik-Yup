import styled from "styled-components";
import Attachment from "@kiwicom/orbit-components/lib/icons/Attachment";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  &.file {
    flex-flow: column;
  }
`;
const StyledDataTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;
const StyledDataContent = styled.div`
  padding-left: 15px;
  margin: 0;
`;
const Summary = ({ formik }) => {
  const { values } = formik;

  const labels = {
    issuerName: "Issuer Name",
    invoiceNum: "Invoice Number",
    currency: "Currency",
    amount: "Amount",
    country: "Country",
    vatNum: "VAT Number",
    issueDate: "Issue Date",
    dueDate: "Due Date",
    file: "Invoice File Name",
  };

  return (
    <Container>
      <p>Please confirm the data before submitting</p>
      {Object.keys(values).map((id) => {
        return (
          <Row className={id} key={id}>
            <StyledDataTitle>{labels[id]}</StyledDataTitle>
            <StyledDataContent>
              {id !== "file" ? (
                values[id]
              ) : (
                <div>
                  <Attachment />
                  {values[id].name}
                </div>
              )}
            </StyledDataContent>
          </Row>
        );
      })}
    </Container>
  );
};

export default Summary;
