interface IString_ {
    str: string;
}

interface IIterator_ {
    iter: any[];
}

class Iterator_ implements IIterator_ {
    iter: any[];

    constructor(iter: any[]) {
        this.iter = iter;
    }

    join(sep: string): string {
        const tmp = this.iter.map((item) => `${item}`);
        let result = "";
        for (let i = 0; i < tmp.length; i++)
            result += i < tmp.length - 1 ? tmp[i] + sep : tmp[i];
        return result;
    }
}

class String_ implements IString_ {
    str: string;

    constructor(str: string) {
        this.str = str;
    }

    split(sep: string = " "): string[] {
        let tmp = this.str;
        const result = [];
        while (tmp) {
            const start = tmp.indexOf(sep);
            if (start !== -1) {
                result.push(tmp.substring(0, start));
            } else {
                result.push(tmp);
                break;
            }
            tmp = tmp.substring(start + sep.length);
        }
        return result;
    }
}

const s = new String_("Hello World,  How Are You?");
console.log(new Iterator_(s.split(" ")).join(' '))
console.log("Hello World,  How Are You?")
console.log("Hello World,  How Are You?".split(" "));
