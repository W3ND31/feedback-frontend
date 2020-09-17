import Feedback from "../components/types/feedback.type";
import api from "./api";

const createFeedback = (feedback: Feedback) => api.post("/feedback", feedback);

const FeedbackService = {
  createFeedback,
};

export default FeedbackService;
