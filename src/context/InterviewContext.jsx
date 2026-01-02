import React, { createContext, useReducer, useContext, useEffect } from "react";

const InterviewContext = createContext();

const initialState = {
  interviews: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INTERVIEW":
      return { ...state, interviews: [...state.interviews, action.payload] };
    case "DELETE_INTERVIEW":
      return {
        ...state,
        interviews: state.interviews.filter(
          (interview) => interview.id !== action.payload
        ),
      };
    case "UPDATE_INTERVIEW":
      return {
        ...state,
        interviews: state.interviews.map((interview) =>
          interview.id === action.payload.id ? action.payload : interview
        ),
      };
    case "LOAD_INTERVIEWS":
      return { ...state, interviews: action.payload };
    default:
      return state;
  }
};

export const InterviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load interviews from localStorage when the app starts
  useEffect(() => {
    const storedInterviews = JSON.parse(localStorage.getItem("interviews")) || [];
    dispatch({ type: "LOAD_INTERVIEWS", payload: storedInterviews });
  }, []);

  // Save interviews to localStorage whenever the interviews change
  useEffect(() => {
    if (state.interviews.length > 0) {
      localStorage.setItem("interviews", JSON.stringify(state.interviews));
    }
  }, [state.interviews]);

  return (
    <InterviewContext.Provider value={{ state, dispatch }}>
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterviewContext = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterviewContext must be used within InterviewProvider");
  }
  return context;
};
