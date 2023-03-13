namespace Code.Classes
{
    using System.Collections.Generic;
    using System.Text;
    using System.Text.RegularExpressions;

    public class Ryu6
    {
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
        public string Decode(string morseCode)
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

        public string[] SplitString(string str)
        {
            // return Regex.Matches(str + "_", @"\w{2}").Select(x => x.Value).ToArray();

            List<string> result = new List<string>();
            int n = 2;
            for (int i = 0; i < str.Length; i+=2) {
                if(i == str.Length - 1) {
                    n = 1;
                }
                string subString = str.Substring(i, n);

                if(subString.Length == 1) {
                    subString = subString + "_";
                }

                result.Add(subString);
            }

            return result.ToArray();
        }

        public bool IsValidIP(string ipAddres) {
            string[] octets = ipAddres.Split(".");
            string pattern = @"^(0|[1-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|25[0-5])$";

            if(octets.Length != 4) return false;
            foreach(string item in octets) {
                Match m = Regex.Match(item, pattern);
                if(!m.Success) return false;
            }

            return true;
        }
    }
}