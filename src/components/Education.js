function Education(){
    return <section class="education">
    <div class="education__header">
      <h1>Education</h1>
    </div>
    <form>
      <div class="edu">
        <label for="education" class="form-label">Education</label>
        <input class="form-control" id="education" />
      </div>
      <div class="edu">
        <label for="school" class="form-label">School/University</label>
        <input class="form-control" id="school" />
      </div>
      <div class="edu">
        <label for="startDate" class="form-label">Start date </label>
        <input type="date" class="form-control" id="startDate" />
      </div>
      <div class="edu">
        <label for="endDate" class="form-label"
          >End Date/Expected Graduation</label
        >
        <input type="date" class="form-control" id="endDate" />
      </div>
      <button type="button" class="btn btn-primary">Add</button>
    </form>
  </section>
}

export default Education;