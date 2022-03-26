const SHAPES = [
  {
    // O
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ],
    width: 2,
    height: 2,
    rotate: false,
    value: 1,
  },
  {
    // I
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
    width: 1,
    height: 4,
    rotate: true,
    value: 2,
  },
  {
    // L
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    width: 2,
    height: 3,
    rotate: true,
    value: 3,
  },
  {
    // T
    shape: [
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 0 },
    ],
    width: 3,
    height: 2,
    rotate: true,
    value: 4,
  },
  {
    // J
    shape: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 0, y: 2 },
    ],
    width: 2,
    height: 3,
    rotate: true,
    value: 5,
  },
  {
    // S
    shape: [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    width: 3,
    rotate: true,
    height: 2,
    value: 6,
  },
  {
    // Z
    shape: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
    width: 3,
    rotate: true,
    height: 2,
    value: 7,
  },
];

export function randomShape() {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}
