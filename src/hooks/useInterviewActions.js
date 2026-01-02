// hooks/useInterviewActions.js
import { useInterviewContext } from "../context/InterviewContext";

export const useInterviewActions = () => {
  const { dispatch } = useInterviewContext();

  const addInterview = (interview) => {
    dispatch({ type: "ADD_INTERVIEW", payload: interview });
  };

  const updateInterview = (updatedInterview) => {
    dispatch({ type: "UPDATE_INTERVIEW", payload: updatedInterview });
  };

  const deleteInterview = (id) => {
    dispatch({ type: "DELETE_INTERVIEW", payload: id });
  };

  return { addInterview, updateInterview, deleteInterview };
};
