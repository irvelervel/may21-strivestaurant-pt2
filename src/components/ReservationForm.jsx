import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// name -> string
// phone -> number | string
// numberOfPeople -> number | string
// smoking -> boolean
// dateTime -> string
// specialRequests -> string

// every input of our form will be CONTROLLED
// this means that its value will be always stored in our component's state

const ReservationForm = () => (
    <Container>
        <Row className="justify-content-center my-5">
            <Col xs={12} md={6} className="text-center">
                <h2>Book your table NOW!</h2>
                <Form>
                    {/* every Form.Group in react bootstrap is input field */}
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter your phone" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>How many people are you?</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Do you smoke?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date and time</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Do you have any special request?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save reservation
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
)


export default ReservationForm