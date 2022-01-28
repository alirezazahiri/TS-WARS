export class G964 {
    public static longest = (s1: string, s2: string = "") =>
        [...new Set([...s1, ...s2]).values()].sort().join("");
}

const g = G964;
console.log(
    g.longest(
        "ffgghhhhiiiiijjjkkkmmmmmmmmmnnnnnnnnnooooooopppppqqqqqtttttuuwwwwwwxxxzzzzzzzzzz"
    )
);
