using EvenSumAdd.Services;

namespace EvenSumService.Services
{
    public class EvenSumCalculator : IEvenSumCalculator
    {
        public int CalculateSum(List<int> numbers)
        {
            return numbers.Where(n => n % 2 == 0).Sum();
        }
    }
}