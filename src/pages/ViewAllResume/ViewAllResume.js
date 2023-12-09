import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewAllResume.css";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function ViewAllResume() {
  const navigate = useNavigate();
  const [allResumes, setAllResumes] = useState([]);

  function showResume(resume_id) {
    navigate(`/view/${resume_id}`);
    // showResume(resume?.resumeId)
  }

  async function getAllResumes() {
    try {
      // get call to get all resume data
      const response = await axios.get(`https://cv-builder-api-h8zv.onrender.com/api/resumes`);

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
        <h1>View All Resume</h1>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Table style={{ width: "60%" }} striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Resume Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allResumes?.length > 0
                ? allResumes?.map((resume) => {
                    return (
                      <tr>
                        <td>{resume?.resumeId}</td>
                        <td>{resume?.name} </td>
                        <td>
                          <Button
                            variant="secondary"
                            // open resume in new tab
                            onClick={() => {
                              window.open(`/view/${resume?.resumeId}`, "_blank");
                            }}
                          >
                            View Resume 👁
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ViewAllResume;
