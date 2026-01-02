import React from "react";
import { Link } from "react-router-dom";

// AlignIQ. Interview Scheduler
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">AlignIQ</Link>
        <div className="flex space-x-4">
          <Link to="/time-slots">Time Slots</Link>
          <Link to="/schedule-meeting">Schedule Meeting</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/calendar">Calendar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
