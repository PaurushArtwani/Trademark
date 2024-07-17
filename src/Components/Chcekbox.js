import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const Checkbox = ({label,className}) => {
    return (
        <>
            <FormGroup check className={className}>
                <Input type="checkbox" />
                <Label check>
                    {label}
                </Label>
            </FormGroup>
            
        </>
    );
}

export default Checkbox;
