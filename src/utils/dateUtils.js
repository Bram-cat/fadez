export const generateTimeSlots = (startTime, endTime, duration = 30) => {
  const slots = [];
  let currentTime = new Date(`2000-01-01 ${startTime}`);
  const endDateTime = new Date(`2000-01-01 ${endTime}`);

  while (currentTime < endDateTime) {
    slots.push({
      startTime: currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      endTime: new Date(
        currentTime.getTime() + duration * 60000
      ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      isBooked: false,
    });
    currentTime = new Date(currentTime.getTime() + duration * 60000);
  }
  return slots;
};

export const isValidTimeSlot = (time) => {
  const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9](AM|PM)$/i;
  return timeRegex.test(time);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
