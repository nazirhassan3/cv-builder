// Skills Component
import { useEffect, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

function Skills(props) {
  const [skillList, setSkillList] = useState([""]);

  // adding to skill array
  const handleAdd = () => {
    setSkillList([...skillList, ""]);
  };

  // Form field handle change
  const handleChange = (e, index) => {
    const { value } = e.target;
    const list = [...skillList];
    list[index] = value;
    setSkillList(list);
  };

  // Removing skill from array
  const handleRemove = (e, index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  // Update on skillList state change
  useEffect(() => {
    props?.fetchSkills(skillList);
  }, [skillList]);

  return (
    <section class="skills">
      <Card style={{ margin: "20px 0" }}>
        <Card.Header>🤹‍♂️ Skills</Card.Header>
        <Card.Body>
          {skillList.map((x, i) => {
            return (
              <div key={i}>
                <Container style={{ margin: "0 0 10px 0" }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control name="skill" value={x} onChange={(e) => handleChange(e, i)} type="text" placeholder="Angular" />
                  </Form.Group>
                  {/* logic to ensure Add button is at the last element */}
                  {skillList.length - 1 === i && (
                    <Button type="button" style={{ float: "right" }} variant="success" onClick={handleAdd}>
                      Add
                    </Button>
                  )}
                  {/* logic to ensure not remove all Skill */}
                  {skillList.length !== 1 && (
                    <Button type="button" variant="danger" onClick={(e) => handleRemove(e, i)}>
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

export default Skills;
