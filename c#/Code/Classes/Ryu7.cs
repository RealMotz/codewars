using System;

namespace Code.Classes
{
    public class Ryu7
    {
        // <<<<< 7 ryu >>>>>
        // __________________________________________________________

        // =====================
        // Better solutions
        // =====================
        // return Math.Sqrt(n) % 1 == 0;
        public bool IsSquare(int n)
        {
            int maxIterations = (int)Math.Sqrt(n);
            for (int i = 0; i <= maxIterations; i++)
                if(i*i == n) return true;
            return false;
        }
    }
}