function PersonalDetails() {
  return (
    <section class="personal-details">
      <div class="personal-details__header">
        <h1>Personal Details</h1>
      </div>
      <div class="personal-detail">
        <label for="fullName" class="form-label">
          Full Name
        </label>
        <input class="form-control" id="fullName" />
      </div>
      <div class="personal-detail">
        <label for="jobTitle" class="form-label">
          Job Title
        </label>
        <input class="form-control" id="jobTitle" />
      </div>
      <div class="personal-detail">
        <label for="phone" class="form-label">
          Phone
        </label>
        <input type="tel" class="form-control" id="phone" />
      </div>
      <div class="personal-detail">
        <label for="email" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="personal-detail">
        <label for="address" class="form-label">
          Address
        </label>
        <input class="form-control" id="address" />
      </div>
      <div class="personal-detail">
        <label for="summary" class="form-label">
          Summary
        </label>
        <textarea rows="3" name="summary"></textarea>
      </div>
    </section>
  );
}
export default PersonalDetails;
