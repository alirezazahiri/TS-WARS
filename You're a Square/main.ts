export default function isSquare(n: number): boolean {
    const res = Math.sqrt(n);
    return res === Math.floor(res);
}
