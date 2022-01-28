export class Challenge {
    static getMiddle(s: string) {
        return s
            ? s.length % 2 === 0
                ? s[s.length / 2 - 1] + s[s.length / 2]
                : s[Math.floor(s.length / 2)]
            : "";
    }
}

console.log(Challenge.getMiddle("test"));
console.log(Challenge.getMiddle("testing"));
console.log(Challenge.getMiddle("middle"));
console.log(Challenge.getMiddle("A"));
