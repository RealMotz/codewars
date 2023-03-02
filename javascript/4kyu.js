class Kata4 {
    // Ex1
    betterSumIntervals(intervals) {
        // let ys = intervals.sort(([a,b], [c,d]) => a-c);
        // let m = -Number.MAX_VALUE;
        // let res = 0;
        // for (let [a,b] of ys) {
        //   m = Math.max(m, a);
        //   res += Math.max(0, b-m);
        //   m = Math.max(m, b);
        // }
        // return res;

        intervals.sort((p, n) => p[1] - n[1]);

        for (let i = 0; i < intervals.length-1; i++) {
            if (intervals[i][1] > intervals[i+1][0]) {
                intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0])
                intervals[i][1] = intervals[i+1][1];
                intervals.splice(i+1,1);
                i = -1;
            }
        }
        return intervals.reduce((a, v) => a + (v[1]-v[0]),0);
    }

    sumIntervals(intervals) {
        var sortedIntervals = intervals.sort((a,b) => a[0]-b[0]);
        var intervalIndexes = new Set();
        var result = [];
        for (var i = 0; i < sortedIntervals.length; i++) {
            var interval = sortedIntervals[i];
            if(intervalIndexes.has(i)) continue;

            intervalIndexes.add(i);
            var min = interval[0];
            var max = interval[1];
            for (var j = 0; j < sortedIntervals.length; j++) {
                // if(intervalIndexes.includes(j)) continue;
                if(i == j) continue;

                var currMin = sortedIntervals[j][0];
                var currMax = sortedIntervals[j][1];
                if(currMin >= min && currMin <= max) {
                    intervalIndexes.add(j);
                    if(currMax > max) {
                        max = currMax;
                    }
                    continue;
                }
                if(currMin < min && currMax >= min) {
                    intervalIndexes.add(j);
                    min = currMin;
                    if(currMax > max) {
                        max = currMax;
                    }
                    continue;
                }
            }
            result.push([min, max]);
        }

        return result.reduce((acc, curr) => acc + (curr[1] - curr[0]), 0);
    }
}

var kata = new Kata4();
// kata.sumIntervals([[1,4], [7, 10], [3, 5]])

var t0 = performance.now();
kata.sumIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]]);
var t1 = performance.now();
console.log(`Call took ${t1 - t0} milliseconds.`);

var t0 = performance.now();
kata.betterSumIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]]);
var t1 = performance.now();
console.log(`Call took ${t1 - t0} milliseconds.`);

exports.kata4 = Kata4;