export class G964 {
    public static sqInRect(l: number, w: number): number[] {
        if (l === w) return null;
        let [min_, max_] = l < w ? [l, w] : [w, l];
        const res = [];
        let curr = 0;
        while (true) {
            res.push(min_);
            curr += min_ ** 2;
            if (curr === l * w) return res;
            [min_, max_] = min_ < max_ - min_ ? [min_, max_ - min_] : [max_ - min_, min_];
        }
    }
}

console.log(G964.sqInRect(5, 3));
console.log(G964.sqInRect(3, 5));
console.log(G964.sqInRect(20, 14));
