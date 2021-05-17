import React, { PureComponent } from "react";
import {
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  FormFeedback,
} from "reactstrap";

const CustomInput = (props) => {
  return (
    <>
      <FormGroup>
        <InputGroup className='input-group-alternative mb-3'>
          <InputGroupAddon addonType='append'>
            <InputGroupText>
              <i className='ni ni-hat-3' />
            </InputGroupText>
          </InputGroupAddon>

          <Input
            placeholder={props.placeholder}
            type={props.type ? props.type : "text"}
            value={props.value}
            onChange={props.onChange}
            valid={props.valid}
          />
          <FormFeedback>{props.feedback}</FormFeedback>
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default CustomInput;
