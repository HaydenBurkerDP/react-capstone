import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const successfulToast = (message) => {
  toast.success(message, {
    hideProgressBar: true,
    autoClose: 3000,
  });
};
