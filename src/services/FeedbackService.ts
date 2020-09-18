import Feedback from "../components/types/feedback.type";
import api from "./api";

const listFeedbacksByCreator = (creator: string) => api.get(`/feedbacks/${creator}`);

const getFeedback = (id: string) => api.get(`/feedback/${id}`);

const createFeedback = (feedback: Feedback) => api.post("/feedback", feedback);

const updateFeedback = (id: string, feedback: Feedback) => api.patch(`/feedback/${id}`, feedback);

const FeedbackService = {
  listFeedbacksByCreator,
  getFeedback,
  createFeedback,
  updateFeedback,
};

export default FeedbackService;
