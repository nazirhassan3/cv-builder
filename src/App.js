import "./App.css";
import logo from "./5988705.png";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import PersonalDetails from "./components/PersonalDetails";
import { Draggable } from "react-drag-reorder";
import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      <header class="header">
        <img src={logo} alt="Logo" class="logo" />
        <h1 class="header__title">CV Builder</h1>
      </header>
      <form>
        <div class="cv-form">
          <Draggable onPosChange={getChangedPos}>
            {positions?.map((div) => {
              return div?.element;
            })}
          </Draggable>
        </div>
      </form>
    </div>
  );
}

export default App;
