class Kata6 {
    // 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    narcissistic(value) {
        let number = value.toString();
        let length = number.length;
        let sum = number.split('').map(d => d**length).reduce((a,b) => a+b);

        return sum == value;
    }

    sumOfDigits(n) {
        // let number = n.toString().split('');
        // if(number.length == 1) return n;
        // const result = number.reduce((r, d) => Number(r)+Number(d));
        // return this.sumOfDigits(result);

        return n%9;
    }

    breakCamelCase(string) {
        return string.replace(/([a-z])([A-Z])/g, '$1 $2');
    }

    isValidWalk(walk) {
        // function count(val) {
        //     return walk.filter(function(a){return a==val;}).length;
        //   }
        //   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
        if(walk.length != 10) return false;
        let move = {
            'n': 1,
            's': -1,
            'w': -1,
            'e': 1
        }

        var x = 0;
        var y = 0;
        for(let i = 0; i < walk.length; i++) {
            var step = walk[i];
            if(step == 'n' || step == 's') {
                y += move[step];
            } else {
                x += move[step];
            }
        }
        return x == 0 && y == 0;
    }

    sortTheOdd(array) {
        let oddArray = array.reduce((accumulator, current) => {
            if(current%2 != 0) {
                return [...accumulator, current];
            }
            return accumulator;
        }, []);

        console.log(oddArray);
        oddArray.sort((a, b) => a-b);
        console.log(oddArray);
        var j = 0;
        for(let i = 0; i < array.length; i++) {
            if(array[i]%2 == 0) continue;

            array[i] = oddArray[j];
            j+=1;
        }
        return array;
    }

    arrayDiff(a, b) {
        /*
        a.filter(e => !b.includes(e));
        */
        return a.reduce((accumulator, current) => {
            if(!b.includes(current)) {
                return [...accumulator, current];
            }
            return accumulator;
        }, [])
    }
}

class Kata5 {
    firstNonRepeatingLetter(s) {
        // for(var i in s) {
        //     if(s.match(new RegExp(s[i],"gi")).length === 1) {
        //       return s[i];
        //     }
        //   }
        //   return '';

        // var t=s.toLowerCase();
        // for (var x=0;x<t.length;x++)
        //   if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        //     return s[x];
        // return "";

        let lowercase = s.toLowerCase();
        let repeated = []
        for(let i = 0; i < lowercase.length; i++) {
            let current = lowercase[i];
            for(let j = 0; j < lowercase.length; j++) {
                if(i == j) continue;
                if(current == lowercase[j]) {
                    repeated.push(s[i]);
                    break;
                }
            }
            if(!repeated.includes(current)) {
                return s[i];
            }
        }
        return '';
    }
}

exports.kata6 = Kata6;
exports.kata5 = Kata5;