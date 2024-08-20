import toast from "react-hot-toast";
export const requestNotificationPermission = async () => {
  if ("Notification" in window) {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("Notification permission denied.");
      toast.error("Notification permission denied");
    }
  }
};
