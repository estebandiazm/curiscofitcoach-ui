import React, {Component} from 'react';
import {Form, FormControl, FormGroup} from 'react-bootstrap';

interface Props {
    placeholder: string,
    type: string,
    input: any,
    meta: any,
    errorMsg: string
}

class FieldFormControl extends Component<Props> {

    render() {
        const {placeholder, type, input, meta, errorMsg} = this.props;
        return (
            <FormGroup controlId={input.name} >
                <Form.Label>{this.props.children}</Form.Label>
                <FormControl  required type={type} placeholder={placeholder}
                              isValid={meta.valid} isInvalid={meta.invalid && meta.touched}
                              value={input.value} onChange={input.onChange}/>
                <FormControl.Feedback type='invalid'>{errorMsg}</FormControl.Feedback>

            </FormGroup>
        );
    }
}

export default FieldFormControl