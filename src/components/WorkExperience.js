import { useEffect, useState } from "react";

function WorkExperience(props) {
  const [workExpList, setWorkExpList] = useState([
    { jobTitle: "", company: "", startDate: "", endDate: "", jobRole: "" },
  ]);

  const handleAdd = () => {
    setWorkExpList([
      ...workExpList,
      { jobTitle: "", company: "", startDate: "", endDate: "", jobRole: "" },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...workExpList];
    list[index][name] = value;
    setWorkExpList(list);
  };

  const handleRemove = (e, index) => {
    const list = [...workExpList];
    list.splice(index, 1);
    setWorkExpList(list);
  };

  useEffect(() => {
    props?.fetchWorkExperience(workExpList);
  }, [workExpList]);

  return (
    <section class="work-experience">
      <div class="work-experience__header">
        <h1>Work Experience</h1>
      </div>
      {workExpList.map((x, i) => {
        return (
          <div key={i}>
            <div class="work-exp">
              <label for="jobTitle" class="form-label">
                Job Title
              </label>
              <input
                class="form-control"
                name="jobTitle"
                value={x.jobTitle}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="work-exp">
              <label for="company" class="form-label">
                Company Name
              </label>
              <input
                class="form-control"
                name="company"
                value={x.company}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="work-exp">
              <label for="startDate" class="form-label">
                From
              </label>
              <input
                type="date"
                class="form-control"
                name="startDate"
                value={x.startDate}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="work-exp">
              <label for="endDate" class="form-label">
                Till
              </label>
              <input
                type="date"
                class="form-control"
                name="endDate"
                value={x.endDate}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            <div class="work-exp">
              <label for="role" class="form-label">
                Job Role
              </label>
              <input
                class="form-control"
                name="jobRole"
                value={x.jobRole}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
            {workExpList.length - 1 === i && (
              <input
                type="button"
                class="btn btn-primary"
                value="Add"
                onClick={handleAdd}
              />
            )}
            {workExpList.length !== 1 && (
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
      <pre>{JSON.stringify(workExpList)}</pre>
    </section>
  );
}

export default WorkExperience;
