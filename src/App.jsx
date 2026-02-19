import React, { useState } from 'react';
import './App.css';

function App() {
  const [academicLevel, setAcademicLevel] = useState("");
  const [department, setDepartment] = useState("");

  const nationalities = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kiribati", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "North Korean", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Western Samoan", "Yemenite", "Zambian", "Zimbabwean"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Form Submitted! Validation Success.");
  };

  // Logic to block numbers for Names and Religion
  const blockNumbers = (e) => {
    if (/[0-9]/.test(e.key)) e.preventDefault();
  };

  // Logic to block letters for Phone numbers and Zip Code
  const blockLetters = (e) => {
    if (/[a-zA-Z]/.test(e.key)) e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <h1>ADEi University</h1>
        <h2>Student Enrollment Portal</h2>
      </header>

      <form onSubmit={handleSubmit}>
        {/* PERSONAL INFORMATION */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-container">
            <label className="required">First Name <input type="text" required onKeyPress={blockNumbers} /></label>
            <label>Middle Name <input type="text" onKeyPress={blockNumbers} /></label>
            <label className="required">Last Name <input type="text" required onKeyPress={blockNumbers} /></label>
            <label>Suffix <input type="text" onKeyPress={blockNumbers} /></label>
            <label className="required">Date of Birth <input type="date" onKeyDown={(e) => e.preventDefault()} required /></label>
            <label className="required">Gender
              <select required>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </label>
            <label className="required">Nationality
              <select required>
                <option value="">--Select Nationality--</option>
                {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
            <label className="required">Religion <input type="text" required onKeyPress={blockNumbers} /></label>
          </div>
        </fieldset>

        {/* CONTACT DETAILS */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-container">
            <label className="required">Email Address <input type="email" required /></label>
            <label className="required">Mobile Number <input type="tel" required onKeyPress={blockLetters} /></label>
            <label>Landline (10 digits) <input type="tel" maxLength="10" onKeyPress={blockLetters} /></label>
            <label className="required">Street Address <input type="text" required /></label>
            <label className="required">Barangay <input type="text" required /></label>
            <label className="required">City <input type="text" required /></label>
            <label className="required">Province <input type="text" required /></label>
            <label className="required">Zip Code <input type="text" required onKeyPress={blockLetters} /></label>
          </div>
        </fieldset>

        {/* ACADEMIC HISTORY */}
        <fieldset>
          <legend>Academic History</legend>
          <div className="grid-container">
            <label className="required">Grade School Name <input type="text" required /></label>
            <label className="required">GS Year (1900-2026) <input type="number" min="1900" max="2026" required /></label>
            <label className="required">GS Address <input type="text" required /></label>
            <label className="required">Junior High Name <input type="text" required /></label>
            <label className="required">JHS Year (1900-2026) <input type="number" min="1900" max="2026" required /></label>
            <label className="required">JHS Address <input type="text" required /></label>
            <label className="required">Senior High Name <input type="text" required /></label>
            <label className="required">SHS Year (1900-2026) <input type="number" min="1900" max="2026" required /></label>
            {/* GRADE AVERAGE: TYPE BY APPLICANT */}
            <label className="required">Grade Average <input type="number" step="0.01" placeholder="0.00" required /></label>
            <label className="required">SHS Address <input type="text" required /></label>
          </div>
        </fieldset>

        {/* ENROLLMENT CHOICES */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="radio-container">
            <div className="radio-group">
              <p className="required">Academic Level:</p>
              <label><input type="radio" name="level" value="Undergraduate" onChange={(e) => {setAcademicLevel(e.target.value); setDepartment("");}} required /> Undergraduate</label>
              <label><input type="radio" name="level" value="Graduate" onChange={(e) => {setAcademicLevel(e.target.value); setDepartment("");}} /> Graduate</label>
            </div>
            <div className="radio-group">
              <p className="required">Semester:</p>
              <label><input type="radio" name="semester" value="1st" required /> 1st</label>
              <label><input type="radio" name="semester" value="2nd" /> 2nd</label>
            </div>
            <div className="radio-group">
              <p className="required">Campus:</p>
              <label><input type="radio" name="campus" value="Manila" required /> Manila</label>
              <label><input type="radio" name="campus" value="QC" /> Quezon City</label>
            </div>
          </div>
          <div className="grid-container">
            <label className="required">College Department
              <select required value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">--Select Department--</option>
                {academicLevel === "Undergraduate" && (
                  <>
                    <option value="CEA">Engineering & Architecture</option>
                    <option value="CCS">Computer Studies</option>
                    <option value="CBE">Business Education</option>
                    <option value="CAS">Arts and Sciences</option>
                  </>
                )}
                {academicLevel === "Graduate" && (
                  <>
                    <option value="DOC">Doctorate Degrees</option>
                    <option value="MA">Master's Degrees</option>
                  </>
                )}
              </select>
            </label>
            <label className="required">Degree Program
              <select required>
                <option value="">--Select Program--</option>
                {department === "CEA" && (
                  <>
                    <option>BS Architecture</option><option>BS Chemical Engineering</option>
                    <option>BS Civil Engineering</option><option>BS Computer Engineering</option>
                    <option>BS Electrical Engineering</option><option>BS Electronics Engineering</option>
                    <option>BS Industrial Engineering</option><option>BS Mechanical Engineering</option>
                  </>
                )}
                {department === "CCS" && (
                  <>
                    <option>BS Computer Science</option><option>BS Data Science and Analytics</option>
                    <option>BS Entertainment and Multimedia Computing</option><option>BS Information Technology</option>
                  </>
                )}
                {department === "CBE" && (
                  <>
                    <option>BS Accountancy</option><option>BS Accounting Information System</option>
                    <option>BS Business Administration (Financial, HR, Logistics, Marketing)</option>
                  </>
                )}
                {department === "DOC" && (
                  <>
                    <option>Doctor in Information Technology</option>
                    <option>Doctor of Engineering (CpE)</option>
                    <option>Doctor of Philosophy in Computer Science</option>
                  </>
                )}
                {department === "MA" && (
                  <>
                    <option>Master in Information Technology</option>
                    <option>Master of Engineering (All specializations)</option>
                    <option>Master of Science in Computer Science</option>
                  </>
                )}
              </select>
            </label>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;