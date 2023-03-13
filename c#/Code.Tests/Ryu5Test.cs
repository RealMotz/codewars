using Code.Classes;

namespace Code.Tests
{
    public class Ryu5Test
    {
        [Test]
        [TestCase(1, 250, "[[1, 1], [42, 2500], [246, 84100]]")]
        [TestCase(42, 250, "[[42, 2500], [246, 84100]]")]
        [TestCase(250, 500, "[[287, 84100]]")]
        public void SplitString(long m, long n, string expectedResult)
        {
            // Arrange
            Ryu5 ryu5 = new Ryu5();

            // Act
            string result = ryu5.listSquared(m, n);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }
    }
}