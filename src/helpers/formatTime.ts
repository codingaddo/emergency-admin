export const formatTime = (timeInHours: number) => {
  const totalSeconds = Math.round(timeInHours * 3600);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours} hr ${minutes} min ${seconds} sec`;
};
