/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type AnyObj = { [key: string]: any };

function merge<T extends AnyObj, U extends AnyObj>(objA: T, objB: U): AnyObj {
  return Object.assign(objA, objB);
}

export {};
