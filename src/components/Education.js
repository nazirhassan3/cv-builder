// Education Component
import { useEffect, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

function Education(props) {
  const [educationList, setEducationList] = useState([{ education: "", school: "", startDate: "", endDate: "" }]);

  // adding to education array
  const handleAdd = () => {
    setEducationList([...educationList, { education: "", school: "", startDate: "", endDate: "" }]);
  };

  // Form field handle change
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  // Removing education element from array
  const handleRemove = (e, index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  // Update on educationList state change
  useEffect(() => {
    props?.fetchEducation(educationList);
  }, [educationList]);

  return (
    <section class="education">
      <Card style={{ margin: "20px 0" }}>
        <Card.Header>👨‍🎓 Education</Card.Header>
        <Card.Body>
          {educationList.map((x, i) => {
            return (
              <div key={i}>
                <Container>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Education</Form.Label>
                        <Form.Control name="education" value={x.education} onChange={(e) => handleChange(e, i)} type="text" placeholder="BSc" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>School/University</Form.Label>
                        <Form.Control name="school" value={x.school} onChange={(e) => handleChange(e, i)} type="text" placeholder="University of XYZ" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control name="startDate" value={x.startDate} onChange={(e) => handleChange(e, i)} type="date" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>End Date/Expected Graduation</Form.Label>
                        <Form.Control name="endDate" value={x.endDate} onChange={(e) => handleChange(e, i)} type="date" />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* logic to ensure Add button is at the last element */}
                  {educationList.length - 1 === i && (
                    <Button style={{ float: "right" }} variant="success" onClick={handleAdd}>
                      Add
                    </Button>
                  )}
                  {/* logic to ensure not remove all education element */}
                  {educationList.length !== 1 && (
                    <Button variant="danger" onClick={(e) => handleRemove(e, i)}>
                      Remove
                    </Button>
                  )}
                </Container>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </section>
  );
}

export default Education;
