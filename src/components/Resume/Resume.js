import WorkExperience from "../WorkExperience";
import Education from "../Education";
import PersonalDetails from "../PersonalDetails";
import { Draggable } from "react-drag-reorder";
import { useEffect, useState } from "react";
import Skills from "../Skills";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Resume() {
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});
  const [skillsList, setSkillsList] = useState([]);

  const [positions, setPositions] = useState([
    {
      name: "personal",
      pos: 1,
      element: <PersonalDetails fetchPersonalDetails={(details) => setPersonalDetails(details)} />,
    },
    {
      name: "education",
      pos: 2,
      element: <Education fetchEducation={(education) => setEducationList(education)} />,
    },
    {
      name: "work",
      pos: 3,
      element: <WorkExperience fetchWorkExperience={(experience) => setWorkExperienceList(experience)} />,
    },
    {
      name: "skills",
      pos: 4,
      element: <Skills fetchSkills={(skills) => setSkillsList(skills)} />,
    },
  ]);

  const getChangedPos = (currentPos, newPos, e) => {
    // console.log(currentPos, newPos, e);

    const newPositions = [...positions];

    const item = newPositions.splice(currentPos, 1)[0];

    // console.log("test", newPositions.splice(currentPos, 1));
    newPositions.splice(newPos, 0, item);

    setPositions(newPositions);
  };

  function getFinalPositions() {
    let finalPos = [];
    positions?.map((item) => finalPos.push(item?.name));
    return finalPos;
  }

  async function createResume(e) {
    e.preventDefault();
    // console.log("final", getFinalPositions());

    // console.log(e);
    // const requestObject = {
    //   name: "Naz",
    //   jobTitle: "Dev",
    //   phone: "03994002002",
    //   email: "naz@gmail.com",
    //   address: null,
    //   summary: "thisis the summary",
    //   workExperience: [
    //     {
    //       jobTitle: "dev",
    //       company: "hcl",
    //       joinDate: "1970-01-01",
    //       till: null,
    //       jobRole: "dev dping that and this",
    //       resume: null,
    //     },
    //   ],
    //   education: null,
    //   skills: ["java", "python"],
    //   sectionOrder: getFinalPositions(),
    // };
    // const detail = { ...personalDetails };
    const requestObject = {
      name: personalDetails.fullName,
      jobTitle: personalDetails.jobTitle,
      phone: personalDetails.phone,
      email: personalDetails.email,
      address: personalDetails.address,
      summary: personalDetails.summary,
      education: educationList,
      workExperience: workExperienceList,
      skills: skillsList,
      sectionOrder: getFinalPositions(),
    };

    const headers = {
      "Content-Type": "application/json",
      "User-Agent": "PostmanRuntime/7.35.0",
    };

    try {
      const response = await axios.post(`https://cv-builder-api-h8zv.onrender.com/api/resumes`, requestObject, {
        headers: headers,
      });
      console.info(response);
      if (response?.status === 200) {
        alert("Resume Successfully Saved!");
      }
    } catch (error) {
      console.error(error);
      alert("Resume Saving Failed!");
    }
  }

  return (
    <Form onSubmit={createResume}>
      <div class="cv-form">
        <p style={{ fontWeight: 600, fontSize: "22px" }}>🤚 Drag to reorder</p>
        <Draggable onPosChange={getChangedPos}>
          {positions?.map((div) => {
            return div?.element;
          })}
        </Draggable>
        <Button style={{ marginTop: "10px" }} type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default Resume;
