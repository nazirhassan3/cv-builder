import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewResume.css";

function ViewResume(props) {
  let { id } = useParams();

  const [resumeDetails, setResumeDetails] = useState({});

  async function getResumeById(id) {
    try {
      const response = await axios.get(`https://cv-builder-api-h8zv.onrender.com/api/resumes/${id}`);

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

  useEffect((id) => {
    // console.log(id);

    if (id > 0) {
      getResumeById(id);
    }
  }, []);

  const sections = {
    education: (
      <div style={{ textAlign: "start" }}>
        <p className="sub-heading-two">Education</p>
        {resumeDetails?.education?.length > 0 ? (
          resumeDetails?.education?.map((education, index) => {
            return (
              <div key={index}>
                <p className="text bold mb-0">
                  <span className="emphasis">{education?.education} </span> — <i>{education?.school}</i>
                </p>
                <p className="text bold">
                  From {education?.startDate} to {education?.endDate}
                </p>
              </div>
            );
          })
        ) : (
          <p>No education history found</p>
        )}
      </div>
    ),
    skills: (
      <div style={{ textAlign: "start" }}>
        <p className="sub-heading-two">Skills</p>
        <ul className="list text">
          {resumeDetails?.skills?.length > 0 ? (
            resumeDetails?.skills?.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })
          ) : (
            <p>No skills found</p>
          )}
        </ul>
      </div>
    ),

    work: (
      <div style={{ textAlign: "start" }}>
        <p className="sub-heading-two">Work Experience</p>
        {resumeDetails?.workExperience?.length > 0 ? (
          resumeDetails?.workExperience?.map((experience, index) => {
            return (
              <div key={index}>
                <p className="text bold mb-0">
                  <span className="emphasis">{experience?.company}</span> —
                  <i>
                    {experience?.jobTitle} {experience?.jobRole}
                  </i>
                </p>
                <p className="text bold">
                  From {experience?.startDate} to {experience?.endDate}
                </p>
              </div>
            );
          })
        ) : (
          <p>No experience found</p>
        )}
      </div>
    ),
  };

  return (
    <>
      <div className="bg-color-main">
        <center>
          <section className="section-max-width">
            <div className="header-top-border">
              <div>
                <h2 className="header-name">{resumeDetails?.name}</h2>
              </div>
              <div className="header-contact">
                <p style={{ margin: 0, fontSize: "16px" }}>
                  <b>Job Title:</b> {resumeDetails?.jobTitle}
                </p>
                <p style={{ margin: 0, fontSize: "16px" }}>
                  <b>Address:</b> {resumeDetails?.address}
                </p>
                <p style={{ margin: 0, fontSize: "16px" }}>
                  <b>Phone Number:</b> {resumeDetails?.phone}
                </p>
                <p style={{ margin: 0, fontSize: "16px" }}>
                  <b>Email:</b>
                  <a href={`mailto:${resumeDetails?.email}`}>{resumeDetails?.email}</a>
                </p>
              </div>
            </div>
            <div>
              <div className="content">
                <p className="sub-heading-two">Summary</p>
                <p className="text">{resumeDetails?.summary}</p>
              </div>
            </div>
            <div className="content">
              {resumeDetails?.sectionOrder?.length > 0
                ? resumeDetails?.sectionOrder?.map((section, index) => {
                    return <div key={index}>{sections[section]}</div>;
                  })
                : null}
            </div>
            <div className="pg-container">
              <div>
                <p className="sub-heading-two">CV Generator &copy; {new Date().getFullYear()}</p>
              </div>
            </div>
          </section>
        </center>
      </div>
    </>
  );
}

export default ViewResume;
