function WorkExperience(){
    return <section class="work-experience">
    <div class="work-experience__header">
      <h1>Work Experience</h1>
    </div>
    <form>
      <div class="work-exp">
        <label for="jobTitle" class="form-label">Job Title</label>
        <input class="form-control" id="jobTitle" />
      </div>
      <div class="work-exp">
        <label for="companyName" class="form-label">Company Name</label>
        <input class="form-control" id="companyName" />
      </div>
      <div class="work-exp">
        <label for="startDate" class="form-label">From</label>
        <input type="date" class="form-control" id="startDate" />
      </div>
      <div class="work-exp">
        <label for="endDate" class="form-label">Till</label>
        <input type="date" class="form-control" id="endDate" />
        <input type="checkbox" id="endDate" />
        <label for="endDate">Currently Employed</label>
      </div>
      <div class="work-exp">
        <label for="role" class="form-label">Job Role</label>
        <input class="form-control" id="role" />
      </div>
      <button type="button" class="btn btn-primary">Add</button>
    </form>
  </section>
}

export default WorkExperience;