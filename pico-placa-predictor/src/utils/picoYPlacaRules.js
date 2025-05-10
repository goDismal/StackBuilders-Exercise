export function canDrive(plate, dateStr, timeStr) {
  const lastDigit = parseInt(plate.match(/\d+$/)?.[0].slice(-1), 10);
  if (isNaN(lastDigit)) return true;

  const date = new Date(dateStr);
  const day = date.getDay(); // 0=Dom, 1=Lun, ...

  const restrictedDays = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0],
  };

  const restrictedHours = [
    { start: '06:00', end: '09:30' },
    { start: '16:00', end: '20:00' }
  ];

  const isRestricted = restrictedDays[day]?.includes(lastDigit);

  const inRestrictedHours = restrictedHours.some(({ start, end }) => {
    return timeStr >= start && timeStr <= end;
  });

  return !(isRestricted && inRestrictedHours);
}
