export function narcissistic(value: number): boolean {
    /* FIRST APPROACH
        let narcissated = 0;
        const valueStr = `${value}`;
        [...valueStr].forEach((digit: string) => narcissated += Number(digit)**valueStr.length)
    */
    /* ONE-LINER APPROACH */
    return (
        [...`${value}`].reduce(
            (prev: number, curr: string) =>
                Number(curr) ** `${value}`.length + Number(prev),
            0
        ) === value
    );
}
