using Code.Classes;

namespace Code.Tests;

public class ChallengeTests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    [Ignore("Ignore a fixture")]
    [TestCase(new string[] { }, "no one likes this")]
    [TestCase(new string[] { "Peter" }, "Peter likes this")]
    [TestCase(new string[] { "Jacob", "Alex" }, "Jacob and Alex like this")]
    [TestCase(new string[] { "Max", "John", "Mark" }, "Max, John and Mark like this")]
    [TestCase(new string[] { "Alex", "Jacob", "Mark", "Max" }, "Alex, Jacob and 2 others like this")]
    public void LikesTests_GivenArrayOfName_ReturnsString(string[] names, string expectedResult)
    {
        // Arrange

        // Act
        var result = Challenge.Likes(names);

        // Assert
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    [Test]
    [Ignore("Ignore a fixture")]
    [TestCase("Ths wbst s fr lsrs LL!", "This website is for losers LOL!")]
    [TestCase("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", "No offense but,\nYour writing is among the worst I've ever read")]
    [TestCase("Wht r y,  cmmnst?", "What are you, a communist?")]
    [TestCase("s ths th crrct nswr? 1@#T2", "Is this the correct answer? 1@#To2")]
    public void Disemvowel_ReceivesStringWithSentence_ReturnsString(string expectedResult, string str)
    {
        // Arrange

        // Act
        var result = Challenge.Disemvowel(str);

        // Assert
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    [Test]
    [Ignore("Ignore a fixture")]
    [TestCase(".... . -.--   .--- ..- -.. .", "HEY JUDE")]
    [TestCase(" .... . -.--   .--- ..- -.. . ", "HEY JUDE")]
    public void Decode(string morseCode, string expectedResult)
    {
        // Arrange

        // Act
        var actual = Challenge.Decode(morseCode);

        // Assert
        Assert.That(actual, Is.EqualTo(expectedResult));
    }

    [Test]
    public void IsSquare()
    {
        Assert.AreEqual(false, Challenge.IsSquare(-1), "negative numbers aren't square numbers");
        Assert.AreEqual(false, Challenge.IsSquare(3), "3 isn't a square number");
        Assert.AreEqual(true, Challenge.IsSquare(4), "4 is a square number");
        Assert.AreEqual(true, Challenge.IsSquare(25), "25 is a square number");
        Assert.AreEqual(false, Challenge.IsSquare(26), "26 isn't a square number");
    }
}