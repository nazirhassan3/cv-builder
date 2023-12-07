import { useEffect, useState } from "react";

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
      <div class="skills__header">
        <h1>Skills</h1>
      </div>
      {skillList.map((x, i) => {
        return (
          <div key={i}>
            <div class="skill">
              <label for="skill" class="form-label">
                Skill
              </label>
              <input
                class="form-control"
                id="skill"
                value={x}
                name="skill"
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            {skillList.length - 1 === i && (
              <input
                type="button"
                class="btn btn-primary"
                value="Add"
                onClick={handleAdd}
              />
            )}
            {skillList.length !== 1 && (
              <input
                type="button"
                class="btn btn-primary"
                value="Remove"
                onClick={(e) => handleRemove(e, i)}
              />
            )}
          </div>
        );
      })}
      <pre>{JSON.stringify(skillList)}</pre>
    </section>
  );
}

export default Skills;
