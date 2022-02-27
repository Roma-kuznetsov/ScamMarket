import React from "react";
import { Modal,Form,Nav} from "react-bootstrap";

const RegForm = () => {
    return (
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        На этот Email придет письмо
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Введите пароль</Form.Label>
                    <Form.Control type="password" placeholder="Придумайте пароль" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control type="password" placeholder="Повторите пароль" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Введите имя которое будет отображаться в личном кабинете</Form.Label>
                    <Form.Control type="name" placeholder="Имя в личном кабинете" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Я согласен с условиями сайта" />
                    <Nav.Link href="info">Условия соглашения</Nav.Link>
                </Form.Group>
            </Form>
        </Modal.Body>
    )
}
export default RegForm;