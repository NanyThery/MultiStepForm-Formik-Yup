import { DueDateValidation, IssueDateValidation } from "./DateValidations";
import { checkVATNumber } from "./VatFormatValidator";
import * as Yup from "yup";

const validationStep0 = Yup.object({
  vatNum: Yup.string().test(
    "valid-vat",
    "This is not a valid VAT format",
    (value) => checkVATNumber(value)
  ),
});

const validationStep1 = Yup.object({
  invoiceNum: Yup.string().required("Required"),
  dueDate: Yup.date().test(
    "valid-due",
    "Cannot be earlier than today",
    (value) => !DueDateValidation(value)
  ),
  issueDate: Yup.date().test(
    "valid-issue",
    "Cannot be later than today",
    (value) => !IssueDateValidation(value)
  ),
});

const validationStep2 = Yup.object({
  currency: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  file: Yup.mixed().required("Upload invoice"),
});

const validateStep0 = (values, errors) => {
  const isNotEmpty = values.issuerName && values.country && values.vatNum;

  return isNotEmpty && !errors.issuerName && !errors.country && !errors.vatNum;
};

const validateStep1 = (values, errors) => {
  const isNotEmpty = values.invoiceNum && values.issueDate && values.dueDate;

  return (
    isNotEmpty && !errors.invoiceNum && !errors.issueDate && !errors.dueDate
  );
};

const validateStep2 = (values, errors) => {
  const isNotEmpty = values.amount && values.currency && values.file;

  return isNotEmpty && !errors.amount && !errors.currency && !errors.file;
};

export const VALIDATION_SCHEMAS = [
  validationStep0,
  validationStep1,
  validationStep2,
];

export const stepValidations = (step, values, errors) => {
  switch (step) {
    case 0:
      return validateStep0(values, errors);
    case 1:
      return validateStep1(values, errors);
    case 2:
      return validateStep2(values, errors);
    case 3:
      return true;
    default:
      return false;
  }
};
