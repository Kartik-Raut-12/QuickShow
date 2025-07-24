export const dateFormat = (date) => {
  return new Date(date).toLocaleString("en-IN", {
    weekday: "short",  // e.g., "Mon"
      month: "long",   // e.g., "June"
    day: "numeric",      // e.g., "30"
    hour: "numeric",     // e.g., "08"
    minute: "numeric",   // e.g., "00"
    timeZone: "Asia/Kolkata"
  });
};
