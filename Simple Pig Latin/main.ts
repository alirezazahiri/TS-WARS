export const pigIt = (a: string): string => {
    return a
        .split(" ")
        .map((word) =>
            /^\w+$/.test(word) ? word.substring(1) + word[0] + "ay" : word
        )
        .join(" ");
};
