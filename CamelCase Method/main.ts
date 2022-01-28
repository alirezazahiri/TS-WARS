export function camelCase(str: string): string {
    return str
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.substring(1))
        .join("");
}

console.log(camelCase("hello case") === "HelloCase"); // => "HelloCase"
console.log(camelCase("camel case word") === "CamelCaseWord"); // => "CamelCaseWord"