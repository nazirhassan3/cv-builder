// Work Experience Component
import { useEffect, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

function WorkExperience(props) {
  const [workExpList, setWorkExpList] = useState([{ jobTitle: "", company: "", startDate: "", endDate: "", jobRole: "" }]);

  // adding to Work Exp array
  const handleAdd = () => {
    setWorkExpList([...workExpList, { jobTitle: "", company: "", startDate: "", endDate: "", jobRole: "" }]);
  };

  // Form field handle change
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...workExpList];
    list[index][name] = value;
    setWorkExpList(list);
  };

  // Removing Work Exp element from array
  const handleRemove = (e, index) => {
    const list = [...workExpList];
    list.splice(index, 1);
    setWorkExpList(list);
  };

  // Update on workExpList state change
  useEffect(() => {
    props?.fetchWorkExperience(workExpList);
  }, [workExpList]);

  return (
    <section class="work-experience">
      <Card style={{ margin: "20px 0" }}>
        <Card.Header>🏢 Work Experience</Card.Header>
        <Card.Body>
          {workExpList.map((x, i) => {
            return (
              <div key={i}>
                <Container>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control name="jobTitle" value={x.jobTitle} onChange={(e) => handleChange(e, i)} type="text" placeholder="Software Developer" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control name="company" value={x.company} onChange={(e) => handleChange(e, i)} type="text" placeholder="XYZ Co." />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control name="startDate" value={x.startDate} onChange={(e) => handleChange(e, i)} type="date" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control name="endDate" value={x.endDate} onChange={(e) => handleChange(e, i)} type="date" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Job Role</Form.Label>
                    <Form.Control name="jobRole" value={x.jobRole} onChange={(e) => handleChange(e, i)} type="text" placeholder="Frontend developer using Angular." />
                  </Form.Group>
                  {/* logic to ensure Add button is at the last element */}
                  {workExpList.length - 1 === i && (
                    <Button style={{ float: "right" }} variant="success" type="button" class="btn btn-primary" onClick={handleAdd}>
                      Add
                    </Button>
                  )}
                  {/* logic to ensure not remove all Work Exp */}
                  {workExpList.length !== 1 && (
                    <Button type="button" class="btn btn-primary" variant="danger" onClick={(e) => handleRemove(e, i)}>
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

export default WorkExperience;
