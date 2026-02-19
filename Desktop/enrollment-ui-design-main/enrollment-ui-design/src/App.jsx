import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>ADEi University Student Enrollment Portal</h2>
        <p>Please fill out all formal institutional record fields below.</p>
      </header>

      {/* Phase 2: The Main Form Container [cite: 112] */}
      <form onSubmit={(e) => { e.preventDefault(); alert('Registration Submitted!'); }}>
        
        {/* SECTION 1: PERSONAL INFORMATION [cite: 40, 117] */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-container">
            <label>First Name <input type="text" required /></label>
            <label>Middle Name <input type="text" /></label>
            <label>Last Name <input type="text" required /></label>
            <label>Suffix <input type="text" placeholder="e.g. Jr." /></label>
            
            {/* Requirement: Date of Birth click-only interaction [cite: 119] */}
            <label>Date of Birth 
              <input type="date" onKeyDown={(e) => e.preventDefault()} required />
            </label>
            
            <label>Gender
              <select required>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </label>
            
            <label>Nationality
              <select required>
                <option value="filipino">Filipino</option>
                <option value="others">Others</option>
              </select>
            </label>
            
            <label>Religion <input type="text" required /></label>
          </div>
        </fieldset>

        {/* SECTION 2: CONTACT DETAILS [cite: 46, 123] */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-container">
            <label>Email Address <input type="email" required /></label>
            <label>Mobile Number <input type="tel" required /></label>
            <label>Landline <input type="tel" /></label>
            <label>Street Address <input type="text" required /></label>
            <label>Barangay <input type="text" required /></label>
            <label>City <input type="text" required /></label>
            <label>Province <input type="text" required /></label>
            <label>Zip Code <input type="text" required /></label>
          </div>
        </fieldset>

        {/* SECTION 3: ACADEMIC HISTORY [cite: 51, 128] */}
        <fieldset>
          <legend>Academic History</legend>
          <div className="grid-container">
            {/* Junior High School */}
            <label>JHS School Name <input type="text" required /></label>
            <label>JHS Address <input type="text" required /></label>
            <label>JHS Year Graduated 
              <input type="number" min="1900" max="2026" required />
            </label>
            
            {/* Senior High School [cite: 60-62] */}
            <label>SHS School Name <input type="text" required /></label>
            <label>SHS Address <input type="text" required /></label>
            <label>SHS Year Graduated 
              <input type="number" min="1900" max="2026" required />
            </label>
            <label>Grade Average 
              <input type="number" step="0.01" required />
            </label>
          </div>
        </fieldset>

        {/* SECTION 4: ENROLLMENT CHOICES [cite: 63, 132] */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          
          <div className="radio-group">
            <p>Academic Level:</p>
            <label><input type="radio" name="level" required /> Undergraduate</label>
            <label><input type="radio" name="level" /> Graduate</label>
          </div>

          <div className="radio-group">
            <p>Campus:</p>
            <label><input type="radio" name="campus" required /> Manila</label>
            <label><input type="radio" name="campus" /> Quezon City</label>
          </div>

          <div className="grid-container">
            <label>College Department
              <select required>
                <option value="">--Select Dept--</option>
                <option value="CEA">College of Engineering and Architecture</option>
                <option value="CCS">College of Computer Studies</option>
              </select>
            </label>

            <label>Degree Program
              <select required>
                <option value="">--Select Program--</option>
                <option value="BSCPE">BS Computer Engineering</option>
                <option value="BSCS">BS Computer Science</option>
                <option value="BSIT">BS Information Technology</option>
              </select>
            </label>
          </div>
        </fieldset>

        {/* Mandatory Submit Button [cite: 151] */}
        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;