import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewAllResume.css";

function ViewAllResume() {
  const navigate = useNavigate();
  const [allResumes, setAllResumes] = useState([]);

  function showResume(resume_id) {
    navigate(`/view/${resume_id}`);
  }

  async function getAllResumes() {
    try {
      const response = await axios.get(`http://localhost:8080/api/resumes`);

      if (response?.status === 200) {
        console.info(response);
        setAllResumes(response.data);
      } else {
        alert("Failed to fetch resume list");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch resume list");
    }
  }

  useEffect(() => {
    getAllResumes();
  }, []);

  return (
    <>
      <div>
        <h1>View All</h1>
        <div>
          <table>
            {allResumes?.length > 0
              ? allResumes?.map((resume) => {
                  return (
                    <tr>
                      <td>{resume?.resumeId}</td>
                      <td>{resume?.name} </td>
                      <td>
                        <button onClick={() => showResume(resume?.resumeId)}>View Resume</button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewAllResume;
