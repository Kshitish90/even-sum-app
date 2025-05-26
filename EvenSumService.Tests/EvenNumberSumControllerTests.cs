
using EvenSumAdd.Services;
using EvenSumService.Controllers;
using EvenSumService.Services;
using Microsoft.AspNetCore.Mvc;

namespace EvenSumService.Tests
 

{
    public class EvenNumberSumControllerTests
    {
        private readonly EvenNumberSumController _controller;

        public EvenNumberSumControllerTests()
        {
            IEvenSumCalculator calculator = new EvenSumCalculator();
            _controller = new EvenNumberSumController(calculator);
        }

        [Fact]
        public void GetEvenSum_ValidInput_ReturnsCorrectSum()
        {
            var result = _controller.GetEvenSum(new List<int> { 2, 4, 6 }) as OkObjectResult;
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            var json = result.Value?.ToString();
            Assert.Contains("12", json);
        }
    }
}