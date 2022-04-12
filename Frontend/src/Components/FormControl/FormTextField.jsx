import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Field } from "formik";



const FormTextField = ({
    controlId,
    label,
    name,
    type,
    inputGroupPrepend
}) => {
    return (
        <Field name={name}>
            {({ field, form }) => {
                const isValid = !form.errors[field.name];
                const isInvalid = form.touched[field.name] && !isValid;
                return (
                    <Form.Group controlId={controlId}>
                        <Form.Label>{label}</Form.Label>
                        <InputGroup>
                            {inputGroupPrepend}
                            <Form.Control
                                {...field}
                                type={type}
                                isValid={form.touched[field.name] && isValid}
                                isInvalid={isInvalid}
                                feedback={form.errors[field.name]}
                            />
                            <Form.Control.Feedback type="invalid">
                                {form.errors[field.name]}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                );
            }}
        </Field>
    );
};



export default FormTextField;
