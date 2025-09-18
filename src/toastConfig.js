// toastConfig.js
import { toast } from "react-toastify";

export const notify = {
  success: (msg) =>
    toast.success(msg, {
      icon: "🥬",
      style: { backgroundColor: "#28a745", color: "#fff", fontWeight: "bold" },
    }),
  error: (msg) =>
    toast.error(msg, {
      icon: "❌",
      style: { backgroundColor: "#dc3545", color: "#fff", fontWeight: "bold" },
    }),
  info: (msg) =>
    toast.info(msg, {
      icon: "ℹ️",
      style: { backgroundColor: "#17a2b8", color: "#fff", fontWeight: "bold" },
    }),
  warning: (msg) =>
    toast.warning(msg, {
      icon: "⚠️",
      style: { backgroundColor: "#ffc107", color: "#000", fontWeight: "bold" },
    }),
};
