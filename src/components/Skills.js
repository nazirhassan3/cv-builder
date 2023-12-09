import { useEffect, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

function Skills(props) {
  const [skillList, setSkillList] = useState([""]);

  const handleAdd = () => {
    setSkillList([...skillList, ""]);
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    const list = [...skillList];
    list[index] = value;
    setSkillList(list);
  };

  const handleRemove = (e, index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

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
                  {skillList.length - 1 === i && (
                    <Button type="button" style={{ float: "right" }} variant="success" onClick={handleAdd}>
                      Add
                    </Button>
                  )}
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
