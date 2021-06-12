export function getAverage(marks: number[]):number {
  return Math.floor(marks.reduce((a, b) => a + b, 0 ) / marks.length);
}
