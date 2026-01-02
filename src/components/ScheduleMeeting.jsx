import React, { useState, useEffect } from "react";
import { useInterviewActions } from "../hooks/useInterviewActions";

const ScheduleMeeting = ({ editInterview, onClose }) => {
  const { addInterview, updateInterview } = useInterviewActions();
  const [form, setForm] = useState({
    candidate: "",
    interviewer: "",
    date: "",
    time: "",
    type: "",
  });
  const [error, setError] = useState(""); // State to store error messages

  // Provide a default onClose function if it's not passed in as a prop
  const handleClose = onClose || (() => {});

  // Populate the form when editing
  useEffect(() => {
    if (editInterview) {
      setForm(editInterview);
    }
  }, [editInterview]);

  const validateForm = () => {
    // Ensure all fields are filled out
    if (!form.candidate || !form.interviewer || !form.date || !form.time || !form.type) {
      setError("Please fill out all fields.");
      return false;
    }

    // Validate against existing interviews in localStorage
    const savedInterviews = JSON.parse(localStorage.getItem("interviews")) || [];
    const isConflict = savedInterviews.some(
      (interview) =>
        interview.date === form.date &&
        interview.time === form.time &&
        (interview.candidate === form.candidate || interview.interviewer === form.interviewer)
    );

    if (isConflict) {
      setError("Opps !! : The same candidate or interviewer already has an interview at this time.");
      return false;
    }

    setError(""); // Clear error if form is valid
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    if (editInterview) {
      updateInterview({ ...form });
      alert("Interview updated successfully!");
    } else {
      // New interview with unique ID
      const newInterview = { id: Date.now(), ...form };
      addInterview(newInterview); // Adding interview to context
      saveInterviewToLocalStorage(newInterview); // Save to localStorage
      alert("Interview scheduled successfully!");
    }

    setForm({ candidate: "", interviewer: "", date: "", time: "", type: "" });
    handleClose(); // Close the form after submission
  };

  // Save interview data to localStorage
  const saveInterviewToLocalStorage = (interview) => {
    const savedInterviews = JSON.parse(localStorage.getItem("interviews")) || [];
    savedInterviews.push(interview);
    localStorage.setItem("interviews", JSON.stringify(savedInterviews));
  };

  return (
    <div className="schedule-meeting-container mx-auto max-w-lg shadow-lg rounded-lg bg-white p-8">
      <h2 className="text-xl font-bold text-center mb-6">
        {editInterview ? "Edit Interview" : "Schedule a New Interview"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Candidate Name */}
        <input
          type="text"
          placeholder="Candidate Name"
          value={form.candidate}
          onChange={(e) => setForm({ ...form, candidate: e.target.value })}
          className="border rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        {/* Interviewer Name */}
        <input
          type="text"
          placeholder="Interviewer Name"
          value={form.interviewer}
          onChange={(e) => setForm({ ...form, interviewer: e.target.value })}
          className="border rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        {/* Interview Date */}
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        {/* Interview Time */}
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="border rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        {/* Interview Type */}
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Select Type</option>
          <option value="Technical">Technical</option>
          <option value="HR">HR</option>
          <option value="Behavioral">Behavioral</option>
        </select>

        {/* Error message display */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transform transition duration-200"
          >
            {editInterview ? "Update Interview" : "Schedule Interview"}
          </button>
          <button
            type="button"
            onClick={handleClose} // Use the default or passed-in close function
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transform transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleMeeting;
