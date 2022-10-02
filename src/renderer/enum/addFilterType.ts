export const addFilterType = [
  { name: 'BaseType', type: 'input' },
  { name: 'ItemLevel', type: 'input' },
  { name: 'Rarity', type: 'select' },
  { name: 'ItemFont', type: 'etc' },
  { name: 'PlayEffect', type: 'select' },
  // { name: 'MinimapIcon', type: 'select' },
  { name: 'CustomAlertSound', type: 'string' },
  { name: 'Corrupted', type: 'boolean' },
  { name: 'HasInfluence', type: 'select' },
];

export const Rarity = ['Normal', 'Magic', 'Rare', 'Unique'];
export const Inequality = ['>', '<', '=', '>=', '<='];

export const PlayEffect = [
  'Red',
  'Green',
  'Blue',
  'Brown',
  'White',
  'Yellow',
  'Cyan',
  'Grey',
  'Orange',
  'Pink',
  'Purple',
];
export const HasInfluence = [
  'Shaper',
  'Elder',
  'Crusader',
  'Hunter',
  'Redeemer',
  'Warlord',
];
