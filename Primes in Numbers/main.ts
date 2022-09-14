export class G964 {
    public static primeFactors = (n: number) => {
        const factors = { 2: 0 };
        while (n % 2 === 0 && n) {
            n /= 2;
            factors[2]++;
        }
        if (factors[2] === 0) delete factors[2];

        for (let i = 3; i < Math.sqrt(n); i++) {
            if (!n) break;
            factors[i] = 0;
            if (n % i !== 0) {
                delete factors[i];
                continue;
            }
            while (n % i === 0 && n) {
                factors[i]++;
                n /= i;
            }
            if (n / i < 2) {
                factors[n] = 1;
                break;
            }
        }
        return Object.keys(factors)
            .map(
                (key) =>
                    `(${key}${factors[key] > 1 ? `**${factors[key]}` : ""})`
            )
            .join("");
    };
}

console.log(G964.primeFactors(86240));
console.log(G964.primeFactors(1));
