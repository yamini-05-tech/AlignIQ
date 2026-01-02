import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TimeSlots from "./components/TimeSlots";
import ScheduleMeeting from "./components/ScheduleMeeting";
import InterviewDashboard from "./components/InterviewDashboard";
import { InterviewProvider } from "./context/InterviewContext";
import CalendarView from "./components/CalendarView";
import "./App.css";
import './index.css';  

const App = () => {
  return (
    <InterviewProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-slots" element={<TimeSlots />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
          <Route path="/dashboard" element={<InterviewDashboard />} />
          <Route path="/calendar" element={<CalendarView />} />
        </Routes>
      </Router>
    </InterviewProvider>
  );
};

export default App;
