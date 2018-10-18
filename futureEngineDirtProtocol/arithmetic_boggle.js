function arithmeticBoggle(magicNumber, numbers) {
    if (numbers.length === 0 && magicNumber === 0) return true;
    if (numbers.length === 0 && magicNumber !== 0) return false;
    if (numbers.length === 1) {
        if (magicNumber - numbers[0] === 0) {
            return true;
        } else if (magicNumber + numbers[0] === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        let temp = numbers.slice(1);
        if (arithmeticBoggle(magicNumber - numbers[0], temp)) return true;
        if (arithmeticBoggle(magicNumber + numbers[0], temp)) return true;
        return false;
    }
}

arithmeticBoggle(5, [5, 2]); //false
arithmeticBoggle(13, [3, 9, 3, 2]); //true
arithmeticBoggle(0, []); //true
arithmeticBoggle(1, []); //false
arithmeticBoggle(1, [1]); //true
arithmeticBoggle(0, [1]); //false