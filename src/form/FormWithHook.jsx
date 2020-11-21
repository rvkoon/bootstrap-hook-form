import React, { useState } from "react"
import { Form, Row, Col, Button, Alert } from "react-bootstrap"
import { useForm } from "react-hook-form";

export default function FormWithHook(){

    const { register, handleSubmit, errors } = useForm();
    const [ formState, setFormState ] = useState();

    const onSubmit = data => {
        if ( data ) {
            setFormState(data);
        }
    }

    const renderErrors = () => {
        if (errors) {
            const errs = Object.entries(errors, (v,k) => [v,k] )   
            return errs.map(el => {
                return (
                    <Alert variant="danger" key={el[0]}>
                        {el[0]} field is {el[1].type}
                    </Alert>
                )
            })
        }
        return null
    }

    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="my.email@mail.com" ref={register({ required: true })} name="email"/>
                            <Form.Text>Enter your mail, we will send you tons of publicity !!</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="******" ref={register({ required: true })} name="password"/>
                            <Form.Text>Your password will absolutly NOT be safe here !</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                {errors && renderErrors()}
                <Button type="submit">SUBMIT</Button>
            </Form>
            <pre className="form-render">
                <h5 className="text-white">Render</h5>
                {formState && JSON.stringify(formState)}
            </pre>
        </>
    )
}