import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { Formik} from 'formik';
import FormTextField from "./FormTextField";

const RegForm = () => {
debugger
    const schema = yup.object({
        Email: yup.string().required().min(5, 'Минимальная длина 5 символов')
            .max(40, 'Максимальная длина 40 символов'),
        Password: yup.string().required().min(5, 'Минимальная длина 5 символов')
            .max(40, 'Максимальная длина 40 символов'),
        PasswordValid: yup.string().required()
            .min(5, 'Минимальная длина 5 символов')
            .max(40, 'Максимальная длина 40 символов'),
        Name: yup.string().required().min(2, 'Минимальная длина 2 символов')
            .max(40, 'Максимальная длина 40 символов'),
    });

    return (
        <Modal.Body>
            <Formik
                initialValues={{
                    Email: '',
                    Password: '',
                    PasswordValid: '',
                    Name: '',
                    Cart: [],
                    Like: []
                }}
                validationSchema={schema}
                onSubmit={values => {
                    debugger
                    if (values.Password != values.PasswordValid) {
                        alert('пароли не совпадают')
                    } else { alert(JSON.stringify(values, null, 2)); }

                }}
            >
                {({ handleSubmit,isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormTextField
                            controlId="Email"
                            label="Email"
                            type="text"
                            name="Email" />

                        <FormTextField
                            controlId="Password"
                            label="Придумайте пароль"
                            type="password"
                            name="Password" />

                        <FormTextField
                            controlId="PasswordValid"
                            label="Повторите пароль"
                            type="password"
                            name="PasswordValid" />

                        <FormTextField
                            controlId="Name"
                            label="Имя в личном кабинете"
                            type="text"
                            name="Name" />
                        <Modal.Footer>
                            <Button
                                disabled={isSubmitting}
                                as="input"
                                type="submit"
                                value="Submit"
                            />
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal.Body>
    )
}
export default RegForm;
