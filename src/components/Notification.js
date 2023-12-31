import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = () => {
  // Success Notification
  return {
    success: (message) => {
      toast.success(message, {
        draggable: false,
        position: "top-left",
        autoClose: 2000,
        toastId: "1",
      });
    },
    // Failure Notification
    error: (message) => {
      toast.error(message, {
        draggable: false,
        position: "top-left",
        autoClose: 2000,
        toastId: "1",
      });
    },
  };
};
