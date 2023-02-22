using System.Text;
using System.Text.RegularExpressions;

namespace Code.Classes
{
    public class Challenge
    {

        public static string Likes(string[] name)
        {
            switch (name.Length)
            {
                case 0:
                    return "no one likes this";
                case 1:
                    return $"{name[0]} likes this";
                case 2:
                    return $"{name[0]} and {name[1]} like this";
                case 3:
                    return $"{name[0]}, {name[1]} and {name[2]} like this";
                default:
                    return $"{name[0]}, {name[1]} and {name.Length - 2} others like this";
            }
        }

        public static string Disemvowel(string str)
        {
            return Regex.Replace(str, @"[aeiouAEIOU]", "");
        }

        // <<<<< 7 ryu >>>>>
        // __________________________________________________________

        // =====================
        // Better solutions
        // =====================
        // return Math.Sqrt(n) % 1 == 0;
        public static bool IsSquare(int n)
        {
            int maxIterations = (int)Math.Sqrt(n);
            for (int i = 0; i <= maxIterations; i++)
                if(i*i == n) return true;
            return false;
        }

        // <<<<< 6 ryu >>>>>
        // __________________________________________________________

        // =====================
        // Better solutions
        // =====================
        /*
        var words = morseCode.Trim().Split(new[] {"   "}, StringSplitOptions.None);
        var translatedWords = words.Select(word => word.Split(' ')).Select(letters => string.Join("", letters.Select(MorseCode.Get))).ToList();
        return string.Join(" ", translatedWords);
        */
        public static string Decode(string morseCode)
        {
            Dictionary<string, char> MorseCodes = new Dictionary<string, char>() {
            {"/", ' '},
            {".-", 'A'},
            {"-...", 'B'},
            {"-.-.", 'C'},
            {"-..", 'D'},
            {".", 'E'},
            {"..-.", 'F'},
            {"--.", 'G'},
            {"....", 'H'},
            {"..", 'I'},
            {".---", 'J'},
            {"-.-", 'K'},
            {".-..", 'L'},
            {"--", 'M'},
            {"-.", 'N'},
            {"---", 'O'},
            {".--.", 'P'},
            {"--.-", 'Q'},
            {".-.", 'R'},
            {"...", 'S'},
            {"-", 'T'},
            {"..-", 'U'},
            {"...-", 'V'},
            {".--", 'W'},
            {"-..-", 'X'},
            {"-.--", 'Y'},
            {"--..", 'Z'},
            {".----", '1'},
            {"..---", '2'},
            {"...--", '3'},
            {"....-", '4'},
            {".....", '5'},
            {"-....", '6'},
            {"--...", '7'},
            {"---..", '8'},
            {"----.", '9'},
            {"-----", '0'}
        };

            var words = morseCode.Trim().Split("  ");
            StringBuilder decodedMsg = new StringBuilder();
            foreach (var word in words)
            {
                var morseCodes = word.Split(" ");
                foreach (var code in morseCodes)
                {
                    decodedMsg.Append(code != "" ? MorseCodes[code] : " ");
                }
            }
            return decodedMsg.ToString();
        }
    }
}