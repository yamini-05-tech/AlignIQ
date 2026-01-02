import React from "react";

const TimeSlots = () => {
  return (
    <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">Available Time Slots</h2>
      <ul className="space-y-3">
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          10:00 AM - 11:00 AM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          11:00 AM - 12:00 PM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          12:00 PM - 1:00 PM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          1:00 PM - 2:00 PM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          2:00 PM - 3:00 PM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          3:00 PM - 4:00 PM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          4:00 PM - 5:00 PM
        </li>
        <li className="bg-pink-50 p-4 text-lg font-medium rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-pink-200">
          5:00 PM - 6:00 PM
        </li>
      </ul>
    </div>
  );
};

export default TimeSlots;
