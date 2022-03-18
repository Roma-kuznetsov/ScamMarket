import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Formik } from 'formik';
import FormTextField from "./FormTextField";
import { autoAuth, login } from "../../api";
import {useDispatch} from 'react-redux'


const LoginForm = () => {

    const dispatch = useDispatch()

    return (
        <Modal.Body>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => {
                    dispatch(login(values.email,values.password))
                    console.log(values)
                }}
            >
                {({ handleSubmit, isValid, dirty }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormTextField
                            controlId="email"
                            label="Email"
                            type="text"
                            name="email" />

                        <FormTextField
                            controlId="password"
                            label="Придумайте пароль"
                            type="password"
                            name="password" />
                        <Modal.Footer>
                            <Button
                                disabled={!isValid || !dirty}
                                as="input"
                                type="submit"
                                value="Войти"
                            />
                            <Button
                                onClick={()=>{dispatch(autoAuth())}}
                                value="проверка"
                            />
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal.Body>
    )
}
export default LoginForm;