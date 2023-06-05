function fibonacciSequence(n: number): number[] {
  const sequence: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      sequence.push(i);
    } else {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  }

  return sequence;
}

export { fibonacciSequence }