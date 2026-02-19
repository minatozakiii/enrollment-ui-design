import React from "react";

function EnrollmentForm() {
  return (
    <form>
      {/* Personal Information */}
      <fieldset>
        <legend>Personal Information</legend>
        <label>First Name: <input type="text" required /></label>
        <label>Middle Name: <input type="text" /></label>
        <label>Last Name: <input type="text" required /></label>
        <label>Suffix: <input type="text" /></label>
        <label>Date of Birth: 
          <input type="date" onKeyDown={(e) => e.preventDefault()} required />
        </label>
        <label>Gender:
          <select required>
            <option>Male</option>
            <option>Female</option>
            <option>Non-binary</option>
          </select>
        </label>
        <label>Nationality:
          <select required>
            <option>Filipino</option>
            <option>Other</option>
          </select>
        </label>
        <label>Religion: <input type="text" /></label>
      </fieldset>

      {/* Contact Details */}
      <fieldset>
        <legend>Contact Details</legend>
        <label>Email: <input type="email" required /></label>
        <label>Mobile: <input type="tel" required /></label>
        <label>Landline: <input type="tel" /></label>
        <label>Street: <input type="text" /></label>
        <label>Barangay: <input type="text" /></label>
        <label>City: <input type="text" /></label>
        <label>Province: <input type="text" /></label>
        <label>Zip Code: <input type="text" /></label>
      </fieldset>

      {/* Academic History */}
      <fieldset>
        <legend>Academic History</legend>
        <h3>Grade School</h3>
        <label>School Name: <input type="text" /></label>
        <label>Year Graduated: <input type="number" min="1900" max="2026" /></label>
        <label>Address: <input type="text" /></label>

        <h3>Junior High School</h3>
        <label>School Name: <input type="text" /></label>
        <label>Year Graduated: <input type="number" min="1900" max="2026" /></label>
        <label>Address: <input type="text" /></label>

        <h3>Senior High School</h3>
        <label>School Name: <input type="text" /></label>
        <label>Year Graduated: <input type="number" min="1900" max="2026" /></label>
        <label>Grade Average: <input type="number" step="0.01" /></label>
        <label>Address: <input type="text" /></label>
      </fieldset>

      {/* Enrollment Choices */}
      <fieldset>
        <legend>Enrollment Choices</legend>
        <label>Academic Level:
          <input type="radio" name="level" /> Undergraduate
          <input type="radio" name="level" /> Graduate
        </label>
        <label>Semester:
          <input type="radio" name="semester" /> 1st
          <input type="radio" name="semester" /> 2nd
        </label>
        <label>Campus:
          <input type="radio" name="campus" /> Manila
          <input type="radio" name="campus" /> Quezon City
        </label>
        <label>College Department:
          <select>
            <option>College of Engineering and Architecture</option>
            <option>College of Computer Studies</option>
            <option>College of Business Education</option>
            <option>College of Arts</option>
          </select>
        </label>
        <label>Degree Program:
          <select>
            <option>BS Architecture</option>
            <option>BS Computer Engineering</option>
            <option>BS Information Technology</option>
            <option>BS Accountancy</option>
            <option>BA Political Science</option>
            <option>Doctor in IT</option>
            <option>Master in Information Systems</option>
          </select>
        </label>
      </fieldset>

      {/* Submit Button */}
      <button type="submit">Submit Registration</button>
    </form>
  );
}

export default EnrollmentForm;
