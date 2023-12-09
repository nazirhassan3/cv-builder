import { useEffect, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
function PersonalDetails(props) {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    address: "",
    summary: "",
  });

  const handleChange = (e) => {
    const detail = { ...personalDetails };
    detail[e.target.name] = e?.target?.value;

    setPersonalDetails(detail);
  };

  useEffect(() => {
    props?.fetchPersonalDetails(personalDetails);
  }, [personalDetails]);

  return (
    <section class="personal-details">
      <Card style={{ margin: "20px 0" }}>
        <Card.Header>💻 Personal Details</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control name="fullName" value={personalDetails?.fullName} onChange={(e) => handleChange(e)} type="text" placeholder="John Mic" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control name="jobTitle" value={personalDetails?.jobTitle} onChange={(e) => handleChange(e)} type="text" placeholder="Software Developer" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control name="phone" value={personalDetails?.phone} onChange={(e) => handleChange(e)} type="tel" placeholder="+278958959" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" value={personalDetails?.email} onChange={(e) => handleChange(e)} type="email" placeholder="john@mail.com" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={personalDetails?.address} onChange={(e) => handleChange(e)} type="text" placeholder="No.3, 1st Cross Street, Kotte" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Summary</Form.Label>
              <Form.Control name="summary" value={personalDetails?.summary} onChange={(e) => handleChange(e)} as="textarea" rows={3} />
            </Form.Group>
          </Container>
        </Card.Body>
      </Card>
    </section>
  );
}
export default PersonalDetails;
