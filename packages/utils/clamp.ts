/*
Limit number to min and max range
clamp(50, 1, 100) => 50
clamp(-2, 1, 100) => 1
clamp(250, 1, 100) => 100
*/
export const clamp = (number: number, min: number, max: number) =>
  Math.max(min, Math.min(max, number))
