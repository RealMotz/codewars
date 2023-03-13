using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Code.Classes
{
    public class Ryu5
    {
        public string listSquared(long m, long n) {
            StringBuilder result = new StringBuilder();
            result.Append("[");
            for (long i = m; i < n; i++) {
                long sum = Divisors(i).Sum(x => x*x);
                double sumSqrt = Math.Sqrt(sum);

                if(sumSqrt % 1 == 0) {
                    if(result.Length > 1) result.Append(", ");

                    result.Append($"[{i}, {sum}]");
                }
            }

            result.Append("]");
            return result.ToString();
        }

        public long[] Divisors(long n) {
            List<long> result = new List<long>();
            for(int i = 1; i <= n; i++) {
                if(n%i != 0) continue;

                result.Add(i);
            }

            return result.ToArray();
        }
    }
}