import { useEffect, useState } from "react";

function PersonalDetails(props) {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    address: "",
    summary: "",
  });

  const handleChange = (e) => {
    const detail = { ...personalDetails };
    detail[e.target.name] = e?.target?.value;

    setPersonalDetails(detail);
  };

  useEffect(() => {
    props?.fetchPersonalDetails(personalDetails);
  }, [personalDetails]);

  return (
    <section class="personal-details">
      <div class="personal-details__header">
        <h1>Personal Details</h1>
      </div>

      <div class="personal-detail">
        <label for="fullName" class="form-label">
          Full Name
        </label>
        <input
          class="form-control"
          name="fullName"
          value={personalDetails?.fullName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div class="personal-detail">
        <label for="jobTitle" class="form-label">
          Job Title
        </label>
        <input
          class="form-control"
          name="jobTitle"
          value={personalDetails?.jobTitle}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div class="personal-detail">
        <label for="phone" class="form-label">
          Phone
        </label>
        <input
          type="tel"
          class="form-control"
          name="phone"
          value={personalDetails?.phone}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div class="personal-detail">
        <label for="email" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          name="email"
          value={personalDetails?.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div class="personal-detail">
        <label for="address" class="form-label">
          Address
        </label>
        <input
          class="form-control"
          name="address"
          value={personalDetails?.address}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div class="personal-detail">
        <label for="summary" class="form-label">
          Summary
        </label>
        <textarea
          rows="3"
          name="summary"
          value={personalDetails?.summary}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </section>
  );
}
export default PersonalDetails;
