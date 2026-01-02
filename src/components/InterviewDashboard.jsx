import React, { useState, useEffect } from "react";
import { useInterviewContext } from "../context/InterviewContext";
import ScheduleMeeting from "./ScheduleMeeting";

const InterviewDashboard = () => {
  const { state, dispatch } = useInterviewContext();

  const [editInterview, setEditInterview] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filterInterviewer, setFilterInterviewer] = useState("");
  const [filterCandidate, setFilterCandidate] = useState("");

  // Load interviews from localStorage when the component mounts
  useEffect(() => {
    const savedInterviews = JSON.parse(localStorage.getItem("interviews"));
    if (savedInterviews) {
      // Initialize the context with the saved interviews if available
      dispatch({ type: "LOAD_INTERVIEWS", payload: savedInterviews });
    }
  }, [dispatch]);

  // Save interviews to localStorage whenever the interviews state changes
  useEffect(() => {
    if (state.interviews.length > 0) {
      localStorage.setItem("interviews", JSON.stringify(state.interviews));
    }
  }, [state.interviews]);

  // Handle Delete Interview
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_INTERVIEW", payload: id });
  };

  // Handle Edit Interview
  const handleEdit = (interview) => {
    setEditInterview(interview);
  };

  // Filter interviews based on date, interviewer, and candidate
  const filteredInterviews = state.interviews.filter((interview) => {
    return (
      (!filterDate || interview.date === filterDate) &&
      (!filterInterviewer || interview.interviewer.includes(filterInterviewer)) &&
      (!filterCandidate || interview.candidate.includes(filterCandidate))
    );
  });

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Interview Dashboard</h2>

      {/* Filters Section */}
      <div className="filter-container mb-6">
        <div className="filter-item mb-4">
          <label className="font-medium mr-2">Filter by Date:</label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="filter-item mb-4">
          <label className="font-medium mr-2">Filter by Interviewer:</label>
          <input
            type="text"
            placeholder="Enter Interviewer Name"
            value={filterInterviewer}
            onChange={(e) => setFilterInterviewer(e.target.value)}
            className="border rounded p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="filter-item mb-4">
          <label className="font-medium mr-2">Filter by Candidate:</label>
          <input
            type="text"
            placeholder="Enter Candidate Name"
            value={filterCandidate}
            onChange={(e) => setFilterCandidate(e.target.value)}
            className="border rounded p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Interviews List */}
      <div className="interviews-list">
        {filteredInterviews.length === 0 ? (
          <p className="text-red-500">No interviews found matching the filters.</p>
        ) : (
          <ul className="list-disc pl-4 space-y-4">
            {filteredInterviews.map((interview) => (
              <li key={interview.id} className="flex justify-between items-center p-2 border-b">
                <div className="flex-1">
                  <span>
                    {interview.candidate} - {interview.interviewer} ({interview.date} at {interview.time}) type - {interview.type}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(interview)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(interview.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Schedule Meeting Form for Editing */}
      {editInterview && (
        <div className="mt-6">
          <ScheduleMeeting
            editInterview={editInterview}
            onClose={() => setEditInterview(null)}
          />
        </div>
      )}
    </div>
  );
};

export default InterviewDashboard;
