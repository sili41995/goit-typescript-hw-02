/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  color: string;
  position: number;
  weight: number;
};

type TopType = Pick<AllType, 'name' | 'color'>;
type BottomType = Pick<AllType, 'position' | 'weight'>;

function compare<
  T extends { name: string; color: string },
  U extends { position: number; weight: number }
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

compare<TopType, BottomType>(
  { name: 'color', color: 'green' },
  { position: 1, weight: 1 }
);

export {};
