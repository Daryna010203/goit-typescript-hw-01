enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log(`It's a day off: ${isWeekend(DayOfWeek.Saturday)}`);
console.log(`It's a day off: ${isWeekend(DayOfWeek.Friday)}`);
