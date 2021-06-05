import InputField from "@kiwicom/orbit-components/lib/InputField";
import { useState, useEffect } from "react";

const FormattedInput = ({ onChangeFormValue = () => {}, label }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [internValue, setInternValue] = useState(null);

  useEffect(() => {
    setInputValue(internValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internValue]);

  const handleInputChange = () => {
    if (isNaN(inputValue)) {
      setInputValue(internValue);
      return;
    }

    const value = Number(inputValue);

    onChangeFormValue(value);
    setInputValue(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value).toFixed(2));
  };

  const handleBlur = () => {
    handleInputChange();
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleInputChange();
    }
  };

  return (
    <div>
      {isEditing ? (
        <InputField
          textAlign="right"
          label={label}
          id="amount"
          name="amout"
          onChange={(evt) => setInputValue(evt.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          type="text"
        />
      ) : (
        <InputField
          textAlign="right"
          label={label}
          value={formatNumber(inputValue)}
          onClick={() => setIsEditing(true)}
          onFocus={() => setIsEditing(true)}
          type="text"
          readOnly
        />
      )}
    </div>
  );
};

export default FormattedInput;
