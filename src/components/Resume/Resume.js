import WorkExperience from "../WorkExperience";
import Education from "../Education";
import PersonalDetails from "../PersonalDetails";
import { Draggable } from "react-drag-reorder";
import { useEffect, useState } from "react";
import Skills from "../Skills";
import axios from "axios";

function Resume() {
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});
  const [skillsList, setSkillsList] = useState([]);

  const [positions, setPositions] = useState([
    {
      name: "work",
      pos: 1,
      element: (
        <WorkExperience
          fetchWorkExperience={(experience) =>
            setWorkExperienceList(experience)
          }
        />
      ),
    },
    {
      name: "education",
      pos: 2,
      element: (
        <Education
          fetchEducation={(education) => setEducationList(education)}
        />
      ),
    },
    {
      name: "personal",
      pos: 3,
      element: (
        <PersonalDetails
          fetchPersonalDetails={(details) => setPersonalDetails(details)}
        />
      ),
    },
    {
      name: "skills",
      pos: 4,
      element: <Skills fetchSkills={(skills) => setSkillsList(skills)} />,
    },
  ]);

  const getChangedPos = (currentPos, newPos, e) => {
    console.log(currentPos, newPos, e);

    const newPositions = [...positions];

    const item = newPositions.splice(currentPos, 1)[0];

    console.log("test", newPositions.splice(currentPos, 1));
    newPositions.splice(newPos, 0, item);

    setPositions(newPositions);
  };

  function getFinalPositions() {
    let finalPos = [];
    positions?.map((item) => finalPos.push(item?.name));
    return finalPos;
  }

  async function getResume() {
    try {
      let resume_id = 1;

      const response = await axios.get(
        `http://localhost:8080/api/resumes/${resume_id}`
      );

      console.info(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function createResume(e) {
    e.preventDefault();
    console.log("final", getFinalPositions());

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
    try {
      const response = await axios.post(
        `http://localhost:8080/api/resumes`,
        requestObject
      );
      console.info(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={createResume}>
      <div class="cv-form">
        <Draggable onPosChange={getChangedPos}>
          {positions?.map((div) => {
            return div?.element;
          })}
        </Draggable>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Resume;
