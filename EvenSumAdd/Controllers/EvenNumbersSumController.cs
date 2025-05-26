using Microsoft.AspNetCore.Mvc;
using EvenSumAdd.Services;

namespace EvenSumService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EvenNumberSumController : ControllerBase
    {
        private readonly IEvenSumCalculator _calculator;

        public EvenNumberSumController(IEvenSumCalculator calculator)
        {
            _calculator = calculator;
        }

        [HttpPost("sum")]
        public IActionResult GetEvenSum([FromBody] List<int> numbers)
        {
            if (numbers == null || numbers.Count == 0)
                return BadRequest("List of numbers cannot be empty.");

            var sum = _calculator.CalculateSum(numbers);
            return Ok(new { sum });
        }
    }
}