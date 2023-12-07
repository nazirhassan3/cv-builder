import { useEffect, useState } from "react";

function Education(props) {
  const [educationList, setEducationList] = useState([
    { education: "", school: "", startDate: "", endDate: "" },
  ]);

  const handleAdd = () => {
    setEducationList([
      ...educationList,
      { education: "", school: "", startDate: "", endDate: "" },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  const handleRemove = (e, index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  useEffect(() => {
    props?.fetchEducation(educationList);
  }, [educationList]);

  return (
    <section class="education">
      <div class="education__header">
        <h1>Education</h1>
      </div>
      {educationList.map((x, i) => {
        return (
          <div key={i}>
            <div class="edu">
              <label for="education" class="form-label">
                Education
              </label>
              <input
                class="form-control"
                name="education"
                value={x.education}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="edu">
              <label for="school" class="form-label">
                School/University
              </label>
              <input
                class="form-control"
                name="school"
                value={x.school}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="edu">
              <label for="startDate" class="form-label">
                Start date
              </label>
              <input
                type="date"
                class="form-control"
                name="startDate"
                value={x.startDate}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="edu">
              <label for="endDate" class="form-label">
                End Date/Expected Graduation
              </label>
              <input
                type="date"
                class="form-control"
                name="endDate"
                value={x.endDate}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            {educationList.length - 1 === i && (
              <input
                type="button"
                value="Add"
                class="btn btn-primary"
                onClick={handleAdd}
              />
            )}
            {educationList.length !== 1 && (
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
      <pre>{JSON.stringify(educationList)}</pre>
    </section>
  );
}

export default Education;
