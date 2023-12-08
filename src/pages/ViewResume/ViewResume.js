import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewResume.css";

function ViewResume(props) {
  let { id } = useParams();

  const [resumeDetails, setResumeDetails] = useState({});

  async function getResumeById(id) {
    try {
      const response = await axios.get(`http://localhost:8080/api/resumes/${id}`);

      if (response?.status === 200) {
        console.info(response);
        setResumeDetails(response?.data);
      } else {
        alert("Failed to fetch resume");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch resume");
    }
  }

  useEffect(() => {
    console.log(id);

    if (id > 0) {
      getResumeById(id);
    }
  }, []);

  return (
    <>
      <div className="bg-color-main">
        <center>
          <section className="section-max-width">
            <div className="row header-top-border">
              <div className="col-md-12">
                <h2 className="header-name">{resumeDetails?.name}</h2>
              </div>
              <div className="col-md-6 header-contact">
                <p>{resumeDetails?.address}</p>
                <p>
                  <a href={`mailto:${resumeDetails?.email}`}>{resumeDetails?.email}</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col content">
                <p className="sub-heading-two">Summary</p>
                <p className="text">${resumeDetails?.summary}</p>

                <p className="sub-heading-two">Skills</p>

                <ul className="list text">
                  {resumeDetails?.skills?.length > 0 ? (
                    resumeDetails?.skills?.map((skill) => {
                      return <li>{skill}</li>;
                    })
                  ) : (
                    <li>No skills found</li>
                  )}
                </ul>

                <p className="sub-heading-two">Work Experience</p>
                {resumeDetails?.workExperience?.length > 0 ? (
                  resumeDetails?.workExperience?.map((experience) => {
                    return (
                      <>
                        <p className="text bold mb-0">
                          <span className="emphasis">{experience?.company}</span> —
                          <i>
                            {experience?.jobTitle} {experience?.jobRole}
                          </i>
                        </p>
                        <p className="text bold">
                          {experience?.startDate} - {experience?.endDate}
                        </p>
                      </>
                    );
                  })
                ) : (
                  <li>No experience found</li>
                )}

                <p className="sub-heading-two">Education</p>
                {resumeDetails?.education?.length > 0 ? (
                  resumeDetails?.education?.map((education) => {
                    return (
                      <>
                        <p className="text bold mb-0">
                          <span className="emphasis">{education?.education} </span> — <i>{education?.school}</i>
                        </p>
                        <p className="text bold">
                          {education?.startDate} - {education?.endDate}
                        </p>
                      </>
                    );
                  })
                ) : (
                  <li>No education history found</li>
                )}
              </div>
            </div>

            <div className="row pg-container">
              <div className="col-md-12">
                <p className="sub-heading-two">Footer Notes</p>
              </div>
            </div>
          </section>
        </center>
      </div>
    </>
  );
}

export default ViewResume;
