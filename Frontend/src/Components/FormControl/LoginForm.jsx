import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Formik } from 'formik';
import FormTextField from "./FormTextField";
import { useDispatch } from 'react-redux'
import { loginThunk } from "../../redux/authReducer";


const LoginForm = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => {
                    dispatch(loginThunk(values.email, values.password))
                }}
            >
                {({ handleSubmit, isValid, dirty }) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            {/*Field block */}
                            <FormTextField controlId="email" label="Email"
                                type="text" name="email" />

                            <FormTextField
                                controlId="password" label="Придумайте пароль"
                                type="password" name="password" />
                            {/* errorMessage applay */}
                            <p style={{ color: "red" }}>{props.errorMessage}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button disabled={!isValid || !dirty} type="submit">Войти</Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default LoginForm;