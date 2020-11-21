import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import FormWithHook from "./form/FormWithHook"

export default function App({}){
    return(
        <div className="app-wrapper">
            <Container className="app-content">
                <Row>
                    <Col md={{span:6, offset:3}}>            
                        <h2>Bootstrap with Hook</h2>
                    </Col>
                </Row>
                <FormWithHook />
            </Container>
        </div>
    )
}