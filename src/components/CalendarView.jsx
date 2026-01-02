import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useInterviewContext } from "../context/InterviewContext";

const locales = {
  "en-US": enUS,
};

// to help calender in displaying dates 
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = () => {
  const { state } = useInterviewContext();

  // Convert interviews to calendar events
  const events = state.interviews?.map((interview) => ({
    title: `${interview.candidate} (${interview.type})`,
    start: parse(
      `${interview.date}T${interview.time}`,
      "yyyy-MM-dd'T'HH:mm",
      new Date()
    ),
    end: parse(
      `${interview.date}T${interview.time}`,
      "yyyy-MM-dd'T'HH:mm",
      new Date()
    ), // Assuming 1-hour interviews
  })) || [];

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold">Scheduled Interviews Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "20px 0" }}
        className="shadow border rounded"
      />
    </div>
  );
};

export default CalendarView;
