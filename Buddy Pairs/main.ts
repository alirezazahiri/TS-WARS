export function buddy(start: number, limit: number): number[] {
  const divisors = (n: number): number[] => {
    const divs = [1];
    for (let i = 2; i <= Math.floor(n / 2); i++) if (n % i === 0) divs.push(i);
    return divs;
  };

  const sumOfList = (list: number[]) =>
    list.reduce((prev: number, current: number) => prev + current, 0);

  for (let i = start; i <= limit; i++) {
    const sumOfDivs = sumOfList(divisors(i).slice(1));
    if (sumOfList(divisors(sumOfDivs).slice(1)) === i) return [i, sumOfDivs]
  }

  return [];
}

const s = buddy(10, 50)
console.log(s)