import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'; 
const Radio = ({label,className}) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <FormGroup check className={className}>
        <Label check>
          <Input
            type="radio"
            name="radioOptions"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          {label}
        </Label>
      </FormGroup>
     
    </div>
  );
};

export default Radio;
