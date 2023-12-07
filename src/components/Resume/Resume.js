import WorkExperience from "../WorkExperience";
import Education from "../Education";
import PersonalDetails from "../PersonalDetails";
import { Draggable } from "react-drag-reorder";
import { useEffect, useState } from "react";
import Skills from "../Skills";

function Resume() {
  const [positions, setPositions] = useState([
    {
      name: "work",
      pos: 1,
      element: <WorkExperience />,
    },
    {
      name: "education",
      pos: 2,
      element: <Education />,
    },
    {
      name: "personal",
      pos: 3,
      element: <PersonalDetails />,
    },
    {
      name: "skills",
      pos: 4,
      element: <Skills />,
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

  useEffect(() => {
    console.log(positions);
  }, [positions]);

  return (
    <form>
      <div class="cv-form">
        <Draggable onPosChange={getChangedPos}>
          {positions?.map((div) => {
            return div?.element;
          })}
        </Draggable>
      </div>
    </form>
  );
}

export default Resume;
