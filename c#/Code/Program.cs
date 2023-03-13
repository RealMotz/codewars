using System;
using System.Text;
using System.Text.RegularExpressions;
using Code.Classes;

internal class Program
{
    private static void Main(string[] args) {
        Ryu5 ryu5 = new Ryu5();
        ryu5.listSquared(1, 250);

        // long[] r = ryu5.Divisors(42);

        // foreach (int i in r) {
        //     Console.Write($"{i}, ");
        // }
    }
}