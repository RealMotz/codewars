class Kata5 {
    // Ex1
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

    // Ex2
    tickTackToeChecker(board) {
        // board = board.join('-').replace(/,/g,'');
        // if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
        // if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
        // if(/0/.test(board)) return -1;

        // 1 => 'X' 2 => 'O' 0 => empty space
        // -1 => incomplete
        // 0 => draw
        // 1 => X
        // 2 => O

        const diagonal1 = board.map((col, i) => col[i])
        const diagonal2 = board.map((col, i) => col[(col.length - 1) - i])

        console.log(board.join('-').replace(/,/g,''));

        var diagonals = [diagonal1, diagonal2];
        var columns = board[0].map((col, i) => board.map(row => row[i]));

        var h = this.winnerChecker(board);
        if(h > 0) return h;
        var c = this.winnerChecker(columns);
        if(c > 0) return c;
        var d = this.winnerChecker(diagonals);
        if(d > 0) return d;

        return Math.min(h, c, d);
    }

    winnerChecker(boardToCheck) {
        var result = 0;
        var sum = 0;
        for(let i = 0; i < boardToCheck.length; i++) {
            var xTokenSum = boardToCheck[i].filter(x => x == 1);
            if(xTokenSum.length != 0) {
                sum = xTokenSum.reduce((acc, cur)=> acc+cur);
            }
            if(sum == 3) return 1;

            var oTokenSum = boardToCheck[i].filter(x => x == 2);
            if(oTokenSum.length != 0) {
                sum = oTokenSum.reduce((acc, cur)=> acc+cur);
            }
            if(sum == 6) return 2;

            var rowTokenSum = boardToCheck[i].reduce((acc, cur)=> acc+cur);
            if(rowTokenSum < 4 && rowTokenSum > 0) { result = -1 };
            sum = 0;
        }
        return result;
    }

    // Ex3
    validParentheses(parens) {
        // var n = 0;
        // for (var i = 0; i < parens.length; i++) {
        //   if (parens[i] == '(') n++;
        //   if (parens[i] == ')') n--;
        //   if (n < 0) return false;
        // }
        // return n == 0;

        var left = [];
        var right = [];
        for (let index = 0; index < parens.length; index++) {
            const parenthese = parens[index];
            if(parenthese == '(') {
                left.push(parenthese);
                continue;
            }

            if(left.length > 0) {
                left.pop();
                continue;
            }

            return false;
        }

        return left.length == right.length;
    }
}

exports.kata5 = Kata5;