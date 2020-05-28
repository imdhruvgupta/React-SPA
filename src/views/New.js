import React from "react";


export default function New() {
    return (
      <section class="section">
        <h1> Add a New Sessions </h1>
        <form>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="exampleFormControlInput1">Start Time</label>
              <input type="datetime-local" id="start" name="start" />
            </div>
            <div class="form-group col-6">
              <label for="exampleFormControlInput1">End Time</label>
              <input type="datetime-local" id="end" name="end" />
            </div>
          </div>
          <button id="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    );
}
  