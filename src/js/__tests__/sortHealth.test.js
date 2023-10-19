import sortHealth from '../sortHealth';

test.each([
  [
    [ { name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 } ],
    [ { name: 'маг', health: 100 }, { name: 'лучник', health: 80 },  { name: 'мечник', health: 10 } ],
  ],
  [
    [ { name: 'мечник', health: 30 }, { name: 'маг', health: 40 }, { name: 'лучник', health: 50 } ],
    [ { name: 'лучник', health: 50 }, { name: 'маг', health: 40 }, { name: 'мечник', health: 30 } ],
  ],
  [
    [ { name: 'мечник', health: 95 }, { name: 'маг', health: 15 }, { name: 'лучник', health: 60 } ],
    [ { name: 'мечник', health: 95 }, { name: 'лучник', health: 60 }, { name: 'маг', health: 15 } ],
  ],
])('тест сортировки героев по уровню жизни', (list, expected) => {
  const correct = sortHealth(list);
  expect(correct).toEqual(expected);
});