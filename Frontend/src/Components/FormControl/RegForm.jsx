import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from 'formik';
import FormTextField from "./FormTextField";
import { authThank } from "../../redux/authReducer";
import { auth } from "../../api";
import { useDispatch } from "react-redux";


const RegForm = (props) => {

    const schema = yup.object().shape({
        email: yup.string().required()
            .min(5, 'Минимальная длина 5 символов')
            .max(40, 'Максимальная длина 40 символов'),
        password: yup.string().required()
            .min(5, 'Минимальная длина 5 символов')
            .max(40, 'Максимальная длина 40 символов'),
        passwordValid: yup.string().required()
            .min(5, 'Минимальная длина 5 символов')
            .max(40, 'Максимальная длина 40 символов')
            .oneOf([yup.ref('password')], 'Пароли не совпадают'),
        name: yup.string().required()
            .min(2, 'Минимальная длина 2 символов')
            .max(40, 'Максимальная длина 40 символов')
    });

    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordValid: '',
                    name: '',
                }}
                validationSchema={schema}
                onSubmit={values => {
                    dispatch(authThank(values.email, values.password, values.name))
                }}
            >
                {({ handleSubmit, isValid, dirty }) => (

                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            {/*Field block */}
                            <FormTextField controlId="email" label="Email"
                                type="text" name="email" />

                            <FormTextField controlId="password" label="Придумайте пароль"
                                type="password" name="password" />

                            <FormTextField controlId="passwordValid" label="Повторите пароль"
                                type="password" name="passwordValid" />

                            <FormTextField controlId="name" label="Имя в личном кабинете"
                                type="text" name="name" />

                            {/* errorMessage applay */}
                            <p style={{ color: "red" }}>{props.errorMessage}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button disabled={!isValid || !dirty} type="submit" >Зарегистрироваться</Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default RegForm;
