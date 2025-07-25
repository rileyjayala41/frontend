import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    skills: "",
    experience: "",
  });
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/generate-resume",
        formData
      );
      setResume(response.data.resume);
    } catch (error) {
      alert("Something went wrong generating the resume.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>AI Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="jobTitle" placeholder="Job Title" onChange={handleChange} required /><br />
        <textarea name="skills" placeholder="Skills" onChange={handleChange} required /><br />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} required /><br />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </form>
      <div style={{ marginTop: "2rem", whiteSpace: "pre-wrap" }}>
        {resume && <><h2>Your AI Resume:</h2><p>{resume}</p></>}
      </div>
    </div>
  );
}

export default App;