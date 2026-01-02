import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and navigate
  const handleStartScheduling = () => {
    navigate("/schedule-meeting"); // Redirect to the ScheduleMeeting component
  };

  return (
    <div className="home-container">
      <img
        src="https://plus.unsplash.com/premium_photo-1684769160411-ab16f414d1bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJ2aWV3fGVufDB8fDB8fHww"
        alt="Interview Background"
        className="home-image"
      />
      <div className="text-container">
        <h1 className="home-title">Welcome to AlignIQ an Interview Scheduler</h1>
        <p className="home-description">
          We help you to secure your Job !!
        </p>
        <p className="home-description">
          Organize and manage your interviews efficiently.
        </p>
        <div className="card">
          <h2 className="card-title">Get Started</h2>
          <p className="card-description">
            Create, schedule, and manage interviews seamlessly with ease.
          </p>
          <button className="start-button" onClick={handleStartScheduling}>
            Start Scheduling
          </button>
        </div>
      </div> 
    </div>


  );
};

export default Home;
