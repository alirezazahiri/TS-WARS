export class G964 {
    static productFib = (prod: number): [number, number, boolean] => {
        /*
        const fib = (n: number): number => {
            if (n == 0) return 0;
            if (n <= 2) return 1;
            return fib(n - 1) + fib(n - 2);
        };

        for (let i = 0; i < Math.sqrt(prod); i++) {
            const a = fib(i);
            const b = fib(i + 1);
            if (a * b === prod) return [a, b, true];
            const c = fib(i + 2);
            if (b * c > prod) return [b, c, false];
            else if (b * c === prod) return [b, c, true];
        }
        */

        let [a, b] = [0, 1];
        while (a * b < prod) [a, b] = [b, a + b];
        return [a, b, a * b === prod];
    };
}

console.log(G964.productFib(714));
