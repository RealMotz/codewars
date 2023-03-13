namespace Code.Tests
{
    using Code.Classes;

    public class AlgorithmTest
    {
        [Test]
        [TestCase(new int[] { -1,0,3,5,9,12 }, 0, 1)]
        [TestCase(new int[] { -1,0,3,5,9,12 }, 3, 2)]
        [TestCase(new int[] { -1,0,3,5,9,12 }, 5, 3)]
        [TestCase(new int[] { -1,0,3,5,9,12 }, 9, 4)]
        [TestCase(new int[] { -1,0,3,5,9,12 }, 12, 5)]
        public void BinarySearch_GivenNumberInArray_ReturnIndex(int[] array, int number, int expectedResult)
        {
            // Arrange
            Algorithms algorithms = new Algorithms();

            // Act
            int result = algorithms.BinarySearch(array, number);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        [TestCase(new int[] { 0, 1 }, 2)]
        public void BinarySearch_GivenNumberNotInArray_ReturnMinus1(int[] array, int number)
        {
            // Arrange
            Algorithms algorithms = new Algorithms();

            // Act
            int result = algorithms.BinarySearch(array, number);

            // Assert
            Assert.That(result, Is.EqualTo(-1));
        }
    }
}