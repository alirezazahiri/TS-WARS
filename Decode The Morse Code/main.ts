const MORSE_CODE: { [morse: string]: string } = {
    "....": "H",
    ".": "E",
    "-.--": "Y",
    ".---": "J",
    "..-": "U",
    "-..": "D",
};

const decodeMorse = (morseCode: string): string => {
    // get the list of words
    const words: string[] = morseCode.split("   ");

    const decodedWords: string = words
        .map((word) =>
            // map the morse word to alphabet and join the characters with "" to get the string
            word
                .split(" ")
                .map((letter) => MORSE_CODE[letter])
                .join("")
        )
        .join(" ").trim();
    
    return decodedWords;
};
