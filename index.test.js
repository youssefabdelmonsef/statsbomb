import { List } from './index.js'

describe('List', () => {
  it('should create list', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3, 4];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [4, 3, -1, 1, 2, 5, 0] })
    const expected = [-1, 0, 1, 2, 3, 4, 5];
    const actual = list.items

    expect(actual).toEqual(expected)
  });

  it('should sort initial list items a if initial is array of objects', () => {
    const list = List({sortKey: 'value', initial: [
      {value: 4},
      {value: 3},
      {value: -1},
      {value: 1},
      {value: 2},
      {value: 5},
      {value: 0}
    ] });
    const expected = [
      {value: -1},
      {value: 0},
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ];
    const actual = list.items;

    expect(actual).toEqual(expected);
  });

  it('should sort initial list items', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300] })
    const expected = [-300, -100, 9, 10, 100, 200];
    const actual = list.items

    expect(actual).toEqual(expected)
  });

  it('should findIndex of b at list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  });
    const expected = 2;
    const actual = list.findIndex(3);

    expect(actual).toEqual(expected);
  });

  it('should findIndex of b at list a if array of objects', () => {
    const list = List({
      sortKey: 'value',
      initial: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4}
      ],
      initialOrder: true
    });
    const expected = 3;
    const actual = list.findIndex(4);

    expect(actual).toEqual(expected);
  });

  it('should insert b into list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  });
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items;

    expect(actual).toEqual(expected);
  });

  it('should insert object into list a', () => {
    const list = List({
      sortKey: 'value',
      initial: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4}
      ],
      initialOrder: true
    });
    const expected = [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5},
    ];
    const actual = list.insert({value: 5}).items;

    expect(actual).toEqual(expected);
  });

  it('should remove b from list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3];
    const actual = list.remove(4).items;
    expect(actual).toEqual(expected)
  });

  it('should remove b from list a (array of objects)', () => {
    const list = List({ 
      sortKey: 'value',
      initial: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4}
      ],
      initialOrder: true
    });
    const expected = [
      {value: 1},
      {value: 2},
      {value: 3}
    ];
    const actual = list.remove(4).items;

    expect(actual.length).toEqual(expected.length)
  });

})
