using Code.Classes;

namespace Code.Tests
{
    public class Ryu6Test
    {
        [Test]
        [TestCase("abc", new string[] {"ab", "c_"})]
        [TestCase("abcdef", new string[] {"ab", "cd", "ef"})]
        public void SplitString(string str, string[] expectedResult)
        {
            // Arrange
            Ryu6 ryu6 = new Ryu6();

            // Act
            string[] result = ryu6.SplitString(str);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        [TestCase("0.0.0.0", true)]
        [TestCase("12.255.56.1", true)]
        [TestCase("137.255.156.100", true)]
        [TestCase("43.206.120.137", true)]
        [TestCase("", false)]
        [TestCase("abc.def.ghi.jkl", false)]
        [TestCase("123.456.789.0", false)]
        [TestCase("12.34.56", false)]
        [TestCase("12.34.56.00", false)]
        [TestCase("12.34.56.7.8", false)]
        [TestCase("12.34.256.78", false)]
        [TestCase("1234.34.56", false)]
        [TestCase("pr12.34.56.78", false)]
        [TestCase("12.34.56.78sf", false)]
        [TestCase("12.34.56 .1", false)]
        [TestCase("12.34.56.-1", false)]
        [TestCase("123.045.067.089", false)]
        public void IsValidIP(string str, bool expectedResult)
        {
            // Arrange
            Ryu6 ryu6 = new Ryu6();

            // Act
            bool result = ryu6.IsValidIP(str);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }
    }
}