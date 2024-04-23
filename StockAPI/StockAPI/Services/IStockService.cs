using StockAPI.Models;

namespace StockAPI.Services
{
    public interface IStockService
    {
        Task<List<Stock>> GetStocks();

    }
}
