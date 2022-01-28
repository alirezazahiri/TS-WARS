export class Kata {
    static validatePin(pin: string): boolean {
        const len = pin.length;
        let isValid: boolean;
        switch (len) {
            case 4:
            case 6:
                isValid = this.isAllDigits(pin);
                break;
            default:
                isValid = false;
                break;
        }
        return isValid;
    }

    static isAllDigits(pin: string): boolean {
        let res = true;
        for (const code of pin)
            if (!(parseInt(code, 10) >= 0)) {
                res = false;
                break;
            }
        return res;
    }
}

const k = Kata;
console.log(k.validatePin("0000"));
console.log(k.validatePin("0510"));
