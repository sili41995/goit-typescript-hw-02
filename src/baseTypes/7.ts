/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum DayOfWeek {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}

const isWeekend = (dayOfWeek: DayOfWeek): boolean =>
  [DayOfWeek.saturday, DayOfWeek.sunday].some((day) => day === dayOfWeek);

console.log(isWeekend(DayOfWeek.friday));
console.log(isWeekend(DayOfWeek.sunday));
