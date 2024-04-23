using StockAPI.Models;

namespace StockAPI.Services
{
    public class StockService :IStockService
    {
        private readonly IStockDbService _dbService;

        public StockService(IStockDbService dbService)
        {
            _dbService = dbService;
        }
        public async Task<List<Stock>> GetStocks()
        {
            var employeeList = await _dbService.GetAll<Stock>("SELECT * FROM public.bilanco", new { });
            return employeeList;
        }
    }
}
