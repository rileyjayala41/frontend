import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    skills: "",
    experience: "",
  });

  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateResume = async () => {
    setLoading(true);
    const res = await fetch("https://resume-backend-q0h5.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResume(data.resume);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-bold mb-4">AI Resume Builder</h1>
        <div className="grid gap-4">
          <input name="name" placeholder="Your Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="jobTitle" placeholder="Target Job Title" onChange={handleChange} className="border p-2 rounded" />
          <textarea name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} className="border p-2 rounded" />
          <textarea name="experience" placeholder="Brief work experience summary" onChange={handleChange} className="border p-2 rounded" />
          <button onClick={generateResume} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {loading ? "Generating..." : "Generate Resume"}
          </button>
        </div>
        <div className="bg-yellow-100 p-3 mt-6 text-center rounded">Place your ad here</div>
        {resume && <div className="mt-6 whitespace-pre-wrap bg-gray-50 p-4 rounded border">
          <h2 className="text-xl font-semibold mb-2">Generated Resume</h2>
          {resume}
        </div>}
      </div>
    </div>
  );
}
