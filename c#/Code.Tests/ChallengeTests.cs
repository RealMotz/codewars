using Code.Classes;

namespace Code.Tests;

public class ChallengeTests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    //[Ignore("Ignore a fixture")]
    [TestCase(new string[] { }, "no one likes this")]
    [TestCase(new string[] { "Peter" }, "Peter likes this")]
    [TestCase(new string[] { "Jacob", "Alex" }, "Jacob and Alex like this")]
    [TestCase(new string[] { "Max", "John", "Mark" }, "Max, John and Mark like this")]
    [TestCase(new string[] { "Alex", "Jacob", "Mark", "Max" }, "Alex, Jacob and 2 others like this")]
    public void LikesTests_GivenArrayOfName_ReturnsString(string[] names, string expectedResult)
    {
        // Arrange
        Challenge challenge = new Challenge();

        // Act
        var result = challenge.Likes(names);

        // Assert
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    [Test]
    //[Ignore("Ignore a fixture")]
    [TestCase("Ths wbst s fr lsrs LL!", "This website is for losers LOL!")]
    [TestCase("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", "No offense but,\nYour writing is among the worst I've ever read")]
    [TestCase("Wht r y,  cmmnst?", "What are you, a communist?")]
    [TestCase("s ths th crrct nswr? 1@#T2", "Is this the correct answer? 1@#To2")]
    public void Disemvowel_ReceivesStringWithSentence_ReturnsString(string expectedResult, string str)
    {
        // Arrange
        Challenge challenge = new Challenge();

        // Act
        var result = challenge.Disemvowel(str);

        // Assert
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    [Test]
    //[Ignore("Ignore a fixture")]
    [TestCase(".... . -.--   .--- ..- -.. .", "HEY JUDE")]
    [TestCase(" .... . -.--   .--- ..- -.. . ", "HEY JUDE")]
    public void Decode(string morseCode, string expectedResult)
    {
        // Arrange
        Ryu6 ryu6 = new Ryu6();

        // Act
        var actual = ryu6.Decode(morseCode);

        // Assert
        Assert.That(actual, Is.EqualTo(expectedResult));
    }

    [Test]
    //[Ignore("Ignore a fixture")]
    public void IsSquare()
    {
        // Arrange
        Ryu7 ryu7 = new Ryu7();

        // Assert
        Assert.AreEqual(false, ryu7.IsSquare(-1), "negative numbers aren't square numbers");
        Assert.AreEqual(false, ryu7.IsSquare(3), "3 isn't a square number");
        Assert.AreEqual(true, ryu7.IsSquare(4), "4 is a square number");
        Assert.AreEqual(true, ryu7.IsSquare(25), "25 is a square number");
        Assert.AreEqual(false, ryu7.IsSquare(26), "26 isn't a square number");
    }
}